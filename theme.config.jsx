export default {
  logo: (
    <span className="brand-lockup">
      <span className="brand-mark" aria-hidden="true">
        A
      </span>
      <span className="brand-text">
        <strong>agentkit</strong>
        <small>Agentic Coding Workshop</small>
      </span>
    </span>
  ),
  project: {
    link: 'https://github.com/effective-ai-lab/agentkit'
  },
  docsRepositoryBase: 'https://github.com/effective-ai-lab/agentkit/tree/main',
  footer: {
    text: 'agentkit — effective-ai-lab'
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="description"
        content="AI가 끝까지 일하게 만드는 법: 프롬프트부터 계획, 도구 사용, 검증까지 배우는 agentkit"
      />
    </>
  ),
  useNextSeoProps() {
    return {
      titleTemplate: '%s – agentkit'
    }
  }
}
