const injectCss = (css, meta) => {
  const head = document.getElementsByTagName('head')[0]
  const style = document.createElement('style')
  style.setAttribute('type', 'text/css')
  style.setAttribute('data-meta', meta)
  if (style.styleSheet) {
    style.styleSheet.cssText = css
  } else {
    style.appendChild(document.createTextNode(css))
  }
  head.appendChild(style)
}

export default injectCss
