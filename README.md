Import this file in your Zabbix : Alerts => Media types

<img width="731" height="784" alt="Screenshot From 2026-11-11 20-20-29" src="https://github.com/user-attachments/assets/3d07973a-6545-4782-b529-e4dbb676abe6" />

HTTP Proxy : proxy.example.com:8080 - If you need one (not sure it's working, never used)

message : {ALERT.MESSAGE} - Use Zabbix macro to get the message and throw it to Signal-API

number : {ALERT.SENDTO} - Here you can put your source phone number from a macro or hardcoded (I'm used to send message to myself :) )

recipients : {ALERT.SENDTO} - Here you put the destination phone numbers, it can be a list in a macro from Zabbix

URL : signal.example.com:8080 - Is the address of you signal REST API

For the REST Signal API I'm using : https://github.com/bbernhard/signal-cli-rest-api

Feel free to improve, add options !

