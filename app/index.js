import _ from 'lodash';
import j from 'jquery'

function component () {
    var element = j('<div></div>');

  /* 需要引入 lodash，下一行才能正常工作 */
  element.html(_.join(['Hello','webpack'], ' '))

  return element.get(0)
}

document.body.appendChild(component());