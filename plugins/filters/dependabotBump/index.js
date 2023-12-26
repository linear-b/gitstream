module.exports = (desc) => {
  if (desc && desc !== '""' && desc !== "''" ) {    
    const matches = /Bumps.*from ([\d\.]+[A-Za-zαß]*) to ([\d\.]+[A-Za-zαß]*)/.exec(desc);
    if (matches && matches.length == 3) {
      var [_, from, to] = matches;
      // remove trailing dot on to
      if (to[to.length - 1] === ".") {
        to = to.slice(0, -1);
      }
      return [to, from];
    }
  }

  return null;
}
