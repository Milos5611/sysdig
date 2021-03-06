# Requirements

* Component is built using React.js
* Component uses ES6/7 syntax and features

## Goal

The goal is to build the following single-page application:

1. Show a list of events by using the Sysdig Cloud API
2. Each event is displayed with all relevant information
3. The table is automatically refreshed every 30 seconds and when the user clicks the "Refresh Now" button
4. Use CSS to make the UI simple but fairly nice

## API

Here is the documentation about how to use the API: https://sysdig.gitbooks.io/sysdig-cloud-api/content/rest_api/getting_started.html

Here is the API token to use: `8aef9517-3070-4090-b55e-83296cee8cd1`

To get the list of events you can use the following API endpoint:

```
GET https://app-staging.sysdigcloud.com/api/events
```

Here are specs for an event descriptor:

```
{
	"id": 123,
	"version": 1,
	"createdOn": 1470083142,
	"modifiedOn": 1470083142,
	"name": "Something happened",
	"description": "More extensive description of the event",
	"severity": 6,
	"timestamp": 1470083142,
	"tags": {
		"node": "ip-1-2-3-4",
		"source": "slack",
		"user": "john"
	}
}
```
