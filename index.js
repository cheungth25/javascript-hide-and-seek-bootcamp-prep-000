function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.getElementById('nested')
}

function increaseRankBy(n) {
  var lis = document.querySelectorAll('ul.ranked-list li')
  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = (n + parseInt(lis[i].innerHTML, 10)).toString()
  }
}

function deepestChild() {
  return document.getElementById("grand-node").children[0]
}
