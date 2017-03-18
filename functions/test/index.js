const requireAllTests = context => context.keys().forEach(function (name) {
  describe(name, function () {
    context(name)
  })
})

requireAllTests(require.context('../src', true, /\.spec\.js$/))
