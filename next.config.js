/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{ //las imagenes que quiero que sean permitidas y next no se queje(mande error)
    domains:['raw.githubusercontent.com']
  }
}

module.exports = nextConfig
