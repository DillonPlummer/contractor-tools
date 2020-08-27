import interact from
'https://cdn.interactjs.io/v1.9.22/interactjs/index.js'

interact('.item')
  .draggable({
    inertia: false,
    modifiers: [
      interact.modifiers.restrictRect({
        restriction: 'parent',
        endOnly: true
      })
    ],
    autoScroll: true,

    listeners: {
      // called on every Drag Move event
      move: dragMoveListener,

      // called on every Drag End event
      end(event) {
        var
      }
    }
  })
