function FindProxyForURL(url, host) {
  if(dnsDomainIs(host, "tym-portal.net")) {
    return "PROXY 160.16.131.175:8081";
  }
  if (host === "2001:f73:8d20:3b00:dfd2:62cb:360b:9698") {
    return "PROXY 160.16.131.175:8081";
  }
  return "DIRECT";
}
