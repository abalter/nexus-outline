const text_processor = MML.getInstance();

fetch('articles/article.mml')
  .then(_ => _.text())
  .then(_ => text_processor.processText(_))
  .then(_ => fillOutline(_))
  // .then(_ => console.log(_))
  // .then(_ => console.log(_.documentElement.innerHTML))
  // .then(_ => fillOutline(text_processor.processText(_));

