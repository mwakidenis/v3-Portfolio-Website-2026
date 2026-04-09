window.onload = function () {
  const favicon = document.getElementById('favicon')
  const pageTitle = document.title
  const attentionMessage = 'Come back'

  document.addEventListener('visibilitychange', function (e) {
    const isPageActive = !document.hidden
    toggle(isPageActive)
  })

  function toggle(isPageActive) {
    if (isPageActive) {
      document.title = pageTitle
      favicon.href = 'https://res.cloudinary.com/dqv8dlj2s/image/upload/q_auto/f_auto/v1772806293/20240814_132224_uxaw4g.jpg'
    } else {
      document.title = attentionMessage
      favicon.href = './assets/images/folded.png'
    }
  }
}
