// next.config.mjs

import autoCert from "anchor-pki/auto-cert/integrations/next";

const withAutoCert = autoCert({
  enabledEnv: "development",
});

const nextConfig = {  images: {
  remotePatterns: [
    {
      protocol: "https",
      hostname: "firebasestorage.googleapis.com",
    },
  ],
},};

export default withAutoCert(nextConfig);