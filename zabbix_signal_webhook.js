try {
    var params = JSON.parse(value),
        req = new HttpRequest(),
        response;

    const reformat = {};

    if (params.HTTPProxy) {
        req.setProxy(params.HTTPProxy);
    }

    reformat['message'] = params.message
    reformat['number'] = params.number
    reformat['recipients'] = [ params.recipients ]

    req.addHeader('Content-Type: application/json');

    Zabbix.log(3, '[ Signal-rest-api webhook ] Webhook request with value=' + JSON.stringify(reformat));

    response = req.post(params.URL, JSON.stringify(reformat));
    Zabbix.log(4, '[ Signal-rest-api ] Responded with code: ' + req.getStatus() + '. Response: ' + response);

    try {
        response = JSON.parse(response);
    }
    catch (error) {
        if (req.getStatus() < 200 || req.getStatus() >= 300) {
            throw 'Request failed with status code ' + req.getStatus();
        }
        else {
            throw 'Request success, but response parsing failed.';
        }
    }

    if (req.getStatus() < 200 || req.getStatus() >= 300 || !response.timestamp || response.timestamp === 'false') {
        throw response.error;
    }

    return 'OK';
}
catch (error) {
    Zabbix.log(3, '[ Signal-rest-api ] Sending failed. Error: ' + error);

    throw 'Failed with error: ' + error;
}
