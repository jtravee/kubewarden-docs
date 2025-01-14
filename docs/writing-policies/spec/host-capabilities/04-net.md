---
sidebar_label: "Network Capabilities"
title: ""
---

# Network capabilities

Kubewarden policies cannot make network request from within the WebAssembly
execution context.

Network operations can be done by leveraging a series of capabilities exposed
by the host.

## DNS host lookup

This function performs a DNS lookup starting from the FQDN given by the policy.

### Caching

Lookup results are cached for 1 minute.

### Communication protocol

This is the description of the waPC protocol used to expose this capability:


| **waPC function name** | **Input payload** | **Output payload** |
|--------------------|---------------|----------------|
| `v1/dns_lookup_host` | <code>// hostname<br/>// JSON encoded string<br/>string</code>  | <code>{<br/>   // list of IPs<br/>   "ips": [<br/>     string<br/>   ]<br/>}</code> |


All the IPs associated with the given FQDN, are going to be returned as strings
inside of the response. Both IPv4 and IPv6 entries are going to be returned as
part of the same response.

For example, when requesting the manifest digest of the `busybox:latest` image,
the payload would be the following ones:

* Input payload: `"google.com"`
* Output payload: `{ "ips": ["127.0.0.1"]}`

