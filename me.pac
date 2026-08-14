function FindProxyForURL(url, host) {
  if(dnsDomainIs(host, "tym-portal.net")) {
    return "PROXY 13.231.169.53:3128";
  }
  if (host === "2001:f73:8d20:3b00:dfd2:62cb:360b:9698") {
    return "PROXY 13.231.169.53:3128";
  }
  return "DIRECT";
}
