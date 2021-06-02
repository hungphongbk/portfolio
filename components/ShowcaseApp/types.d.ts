interface ShowcaseAppData {
  name: string,
  description: string,
  techniques: string[],
  thumbnail: string,
  appUrl?: string,
  githubUrl?: string
}

interface ShowcaseAppProps {
  className?: string,
  value: ShowcaseAppData
}
