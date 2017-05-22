const articleModel = (function () {
  let articles = [
    {
      id: '1',
      title: 'НМИД: Беларусь продолжит взаимодействие с ЕС для полной отмены санкций',
      summary: 'Белорусская сторона продолжит взаимодействие с ЕС в целях полной отмены санкций, заявили в МИД Беларуси.' +
    ' В МИД отметили, что изначально исходят из того, что санкции несправедливы и контрпродуктивны.',
      createdAt: new Date('2017-02-16T19:23:00'),
      author: 'Янушкевич Андрей',
      content: 'В МИД отметили, что изначально исходят из того, что санкции несправедливы и контрпродуктивны.' +
    'Продление оставшихся ограничений в отношении нашей страны не соответствует духу развития сотрудничества' +
    ' между Беларусью и Европейским союзом, заявил пресс-секретарь МИД Дмитрий Мирончик.',
      tags: ['международные'],
    },
    {
      id: '2',
      title: 'Камісія згуляла ў глуханямых. Обсуждение стройки в Куропатах чиновниками не состоялось',
      summary: 'Обсудили все, кроме возведения бизнес-центра в Куропатах.' +
        ' Это краткий итог общественных слушаний по застройке Зеленого Луга, которые прошли сегодня в администрации Первомайского района.',
      createdAt: new Date('2017-01-10T20:40:00'),
      author: 'Янушкевич Евгений',
      content: ' Гражданские активисты и местные жители принесли на открытое собрание тысячу подписей за пересмотр проекта.' +
        ' Но обращение не рассмотрели. В ответ на это вечером 27 февраля активисты провели возле стройплощадки акцию протеста.',
      tags: ['протесты'],
    },
    {
      id: '3',
      title: 'Шуневич рассказал, в каких городах появятся центры временного содержания незаконных мигрантов',
      summary: 'В Беларуси центры временного содержания незаконных мигрантов будут созданы в Витебске, Гомеле и Лиде.' +
        ' Об этом в интервью БЕЛТА рассказал министр внутренних дел Игорь Шуневич. По его словам, появятся центры не раньше 2018 года.',
      createdAt: new Date('2017-01-07T01:20:00'),
      author: 'Янушкевич Андрей',
      content: 'Курирует вопросы создания центров специальная рабочая группа, состоящая из сотрудников МВД' +
        ' и белорусского представительства Международной организации по миграции (МОМ). Центры появятся в нашей стране не раньше 2018 года.' +
        'Управление надзорно-исполнительной деятельности МВД отобрало помещения для центров. Они будут созданы на базе имеющейся инфраструктуры органов внутренних дел.',
      tags: ['мигранты'],
    },
    {
      id: '4',
      title: "Прокурор попросил для Казакевича 15 лет. Обвиняемый: 'Еще вернусь, чтобы закончить начатое'",
      summary: 'Во время суда 18-летний Влад Казакевич полностью признал свою вину, но не раскаялся',
      createdAt: new Date('2017-03-03T10:45:00'),
      author: 'Янушкевич Евгений',
      content: ' Он пожалел лишь о том, что жертв было мало. Наказание молодой человек будет отбывать в колонии не усиленного, а общего режима, так как преступление совершил в несовершеннолетнем возрасте',
      tags: ['криминал'],
    },
    {
      id: '5',
      title: 'Людям предлагают сдавать кровь в ожоговый центр, где лечат пострадавших со скидельской фабрики',
      summary: 'Состояние женщин, пострадавших во время взрыва на сахарном комбинате в Скиделе, тяжелое, сохраняется угроза жизни, рассказал Дмитрий Мазолевский, заведующий ожоговым отделением больницы скорой медицинской помощи.',
      createdAt: new Date('2017-02-13T12:24:00'),
      author: 'Янушкевич Андрей',
      content: `Трех пациенток доставили из Гродно в Минск в субботу, в 19.35, транспортировку они перенесли удовлетворительно.${
        +'По словам Дмитрия Мазолевского, женщин неоднократно осматривал врачебный консилиум, к двум другим пострадавшим, которые продолжают лечение в Гродно, выезжали для консультаций специалисты из ожогового центра.'}`,
      tags: ['медицина'],
    },
    {
      id: '6',
      title: 'Сергея Муравьева приговорили к ограничению свободы и освободили из-под стражи в зале суда',
      summary: 'Сергея Муравьева, брата недавно осужденного на 11 лет бизнесмена Александра Муравьева, приговорили к ограничению свободы на срок 2 года и 6 месяцев без направления в исправительное учреждение.',
      createdAt: new Date('2017-01-19T17:22:00'),
      author: 'Янушкевич Андрей',
      content: 'Его освободили из-под стражи в зале суда. Об этом TUT.BY сообщила помощник председателя Минского городского суда Анастасия Шильвян.',
      tags: ['криминал'],
    },
    {
      id: '7',
      title: 'МВД рассмотрит предложения по вопросам безопасности в торговых центрах',
      summary: 'Министерство внутренних дел рассмотрит поступившие предложения по вопросам безопасности в торговых центрах',
      createdAt: new Date('2017-01-06T19:40:00'),
      author: 'Янушкевич Андрей',
      content: 'Министерство внутренних дел рассмотрит поступившие предложения по вопросам безопасности в торговых центрах, рассказал в интервью БЕЛТА министр внутренних дел Игорь Шуневич. Какие именно предложения рассмотрят правоохранители он не уточнил.',
      tags: ['безопасность'],
    },
    {
      id: '8',
      title: 'Актер Николай Караченцов госпитализирован после ДТП в Подмосковье',
      summary: 'Актер Николай Караченцов попал в ДТП в Щелковском районе Подмосковья, после чего был госпитализирован, сообщили ТАСС в правоохранительных органах области.',
      createdAt: new Date('2017-02-25T19:23:00'),
      author: 'Янушкевич Евгений',
      content: 'Источник в правоохранительных органах сообщил «РИА Новости», что после ДТП в Подмосковье был госпитализирован актер Николай Караченцов. «В Щелковском районе столкнулись две машины, в результате чего Караченцов был травмирован и госпитализирован»,— приводит агентство слова собеседника. ',
      tags: ['ДТП'],
    },
    {
      id: '9',
      title: 'Часть пропавших в Беларуси студентов из Бангладеш оказалась во Франции, других задержали в Латвии',
      summary: 'Часть студентов, которые приехали в Беларусь из Бангладеш учиться и «пропали», оказались во Франции',
      createdAt: new Date('2017-01-05T14:55:00'),
      author: 'Янушкевич Андрей',
      content: 'Часть студентов, которые приехали в Беларусь из Бангладеш учиться и «пропали», оказались во Франции, некоторых задержали пограничники Латвии, рассказал в интервью БЕЛТА министр внутренних дел Беларуси Игорь Шуневич. По словам министра, целью их попадания в Беларусь была последующая миграция в Евросоюз.',
      tags: ['мигранты'],
    },
    {
      id: '10',
      title: '"Провокация для нагнетания напряженности между народами". Минск — о марше "проклятых солдат" в Польше',
      summary: 'Марш памяти «проклятых солдат», состоявшийся накануне в польской Гайновке, — циничная провокация для нагнетания напряженности между белорусами и поляками.',
      createdAt: new Date('2017-02-02T06:31:00'),
      author: 'Янушкевич Евгений',
      content: 'Марш памяти «проклятых солдат», состоявшийся накануне в польской Гайновке, — циничная провокация для нагнетания напряженности между белорусами и поляками. Об этом говорится в комментарии председателя Постоянной комиссии Палаты представителей по правам человека, национальным отношениям и средствам массовой информации, руководителя рабочей группы Национального собрания Беларуси по сотрудничеству с парламентом Польши Андрея Наумовича.',
      tags: ['провокации'],
    },
    {
      id: '11',
      title: 'Пациент: все хотят выучиться на врача, а потом почему-то жалуются на низкую зарплату',
      summary: '«Желающих выучиться на врача пруд пруди. Они что, не представляют, куда идут и на что подписываются?',
      createdAt: new Date('2017-02-20T09:25:00'),
      author: 'Янушкевич Андрей',
      content: '«Желающих выучиться на врача пруд пруди. Они что, не представляют, куда идут и на что подписываются? Или у них в мечтах только чистенький белый халатик, личный кабинетик, медсестра под боком и улыбающийся пациент? Они рассчитывали со студенческой скамьи на почет и лавры седовласого профессора, а оказалось, что нужно пахать», — прокомментировала пользовательница форума Onliner.by жалобы некоторых врачей.',
      tags: ['медицина'],
    },
    {
      id: '12',
      title: 'Нетрезвый отец на Mazda с детьми в салоне сбил женщину с ребенком на руках',
      summary: '33-летний гродненец вечером пил у себя дома пиво, — кратко описали обстоятельства происшествия в ГАИ Гродненской области.',
      createdAt: new Date('2017-02-14T09:20:00'),
      author: 'Янушкевич Андрей',
      content: '33-летний гродненец вечером пил у себя дома пиво, — кратко описали обстоятельства происшествия в ГАИ Гродненской области. — А следующим утром повез на Mazda детей в детсад. Автомобиль двигался в правой полосе». Когда на пешеходный переход вышла женщина с ребенком, он не успел среагировать.',
      tags: ['ДТП'],
    },
    {
      id: '13',
      title: 'Самые ожидаемые игры весны 2017 года',
      summary: 'Весной скучно не будет: многие предвкушают встречу с новыми героями Mass Effect: Andromeda, кто-то хочет погонять в FlatOut 4: Total Insanity или пострелять в Tom Clancy’s Ghost Recon Wildlands. Но обо всем по порядку.',
      createdAt: new Date('2017-03-07T10:00:00'),
      author: 'Янушкевич Андрей',
      content: 'Прошедшей зимой вышло не так уж много действительно интересных и громких проектов. Некоторые из игр вызвали разочарование, другие в целом оправдали ожидания. The Last Guardian оказалась неплохим приключением (хоть и скучным) и привлекла к себе внимание, кроме прочего, тем, что в разработке она находилась долгие девять лет. Resident Evil 7: Biohazard восприняли кто как: некоторым страшилка показалась неканоничной, другим — свежей и интересной.\nFor Honor выглядит неоднозначной и уж точно не хитовой, хотя своя армия поклонников, как и у любой другой игры, у нее есть. А еще вышли Horizon Zero Dawn, Halo Wars 2, Dead Rising 4 и множество других. Весной скучно не будет: многие предвкушают встречу с новыми героями Mass Effect: Andromeda, кто-то хочет погонять в FlatOut 4: Total Insanity или пострелять в Tom Clancy’s Ghost Recon Wildlands. Но обо всем по порядку.',
      tags: ['игры'],
    },
    {
      id: '14',
      title: 'На платформе станции метро «Институт культуры» умер мужчина',
      summary: 'Происшествие случилось сегодня около десяти утра. Как рассказал нам пресс-секретарь метрополитена Андрей Кузьмин, плохо стало минчанину 1950 года рождения. Прибыла бригада скорой.',
      createdAt: new Date('2017-02-27T12:40:00'),
      author: 'Янушкевич Евгений',
      content: 'Происшествие случилось сегодня около десяти утра. Как рассказал нам пресс-секретарь метрополитена Андрей Кузьмин, плохо стало минчанину 1950 года рождения. Прибыла бригада скорой.Реанимационные меры принимались на протяжении получаса, после чего врачи вынуждены были констатировать смерть. Предварительный диагноз — внезапная остановка сердца. На распорядок движения поездов инцидент не повлиял.',
      tags: ['инцидент'],
    },
    {
      id: '15',
      title: 'Таможенники изъяли партию итальянской мебели стоимостью $92 тысячи',
      summary: '40 предметов дорогостоящей итальянской мебели изъяли витебские таможенники. По документам стоимость товара была многократно занижена для уклонения от уплаты таможенных платежей.',
      createdAt: new Date('2017-01-18T20:34:00'),
      author: 'Янушкевич Андрей',
      content: '«Транспортное средство, в котором ввозился товар из Латвийской Республики на территорию ЕАЭС, следовало через пункт пропуска „Григоровщина“, — сообщает пресс-служба ГТК. — Для оформления предметов мебели были представлены документы, в соответствии с которыми стоимость товара составляла 1,3 тыс. долларов США. Однако таможенники при проведении проверки установили, что реальная стоимость товара — около 92 тыс. долларов США».',
      tags: ['мигранты'],
    },
    {
      id: '16',
      title: 'Исполнителей двойного убийства в Минске приговорили к пожизненному, заказчицу — к 12 годам',
      summary: 'Минский городской суд приговорил исполнителей заказного убийства молодой пары в декабре 2015 г. в Минске, а также убийства мужчины в Колодищах к пожизненному заключению с конфискацией имущества. Заказчицу- воспитательницу — к 12 годам колонии общего режима.',
      createdAt: new Date('2017-02-08T09:55:00'),
      author: 'Янушкевич Евгений',
      content: 'Напомним, по версии следствия, причиной трагедии в Минске стала ревность: 27-летняя воспитательница детсада Алина Шульганова хотела вернуть бывшего парня. Она попросила соседа по дому Александра Жильникова (ранее судимого) и его приятеля Вячеслава Сухарко «отправить» соперницу в больницу на пару недель — избить.',
      tags: ['криминал'],
    },
    {
      id: '17',
      title: 'На МКАД женщина на Mercedes снесла столб',
      summary: 'На внешнем кольце МКАД Mercedes вылетел за пределы проезжей части и врезался в столб. Об этом AUTO.TUT.BY сообщили читатели.',
      createdAt: new Date('2017-01-30T14:55:00'),
      author: 'Янушкевич Евгений',
      content: 'Авария произошла днем 6 марта. По предварительной информации, женщина ехала на Mercedes по внешнему кольцу МКАД в направлении Долгиновского тракта. В какой-то момент она не справилась с управлением, автомобиль вылетел с дороги и врезался в мачту освещения.',
      tags: ['ДТП'],
    },
    {
      id: '18',
      title: 'За рассылку порнокартинок житель Светлогорска получил 2 года лишения свободы',
      summary: 'Житель Светлогорска осужден за рассылку фотографий порнографического характера, сообщил заместитель прокурора Светлогорского района Александр Евсеенко.',
      createdAt: new Date('2017-02-28T01:35:00'),
      author: 'Янушкевич Андрей',
      content: 'Мужчина с помощью мобильного телефона рассылал знакомым женщинам изображения порнографического характера. Получательницы такие сообщения сочли оскорбительными и заявили на 38-летнего жителя Светлогорска в милицию.' +
        'Экспертиза подтвердила, что подобные изображения не соответствуют нравственным критериям, оскорбляют честь и достоинство личности. В отношении мужчины было возбуждено уголовное дело по ч.2 ст. 343 (распространение порнографических материалов с использованием глобальной сети Интернет) УК.',
      tags: ['криминал'],
    },
    {
      id: '19',
      title: 'Штрафы и сутки. В Бресте прошли суды над участниками "Марша нетунеядцев"',
      summary: 'Суд Ленинского района Бреста 6 марта рассмотрел административные дела в отношении представителей анархистского движения, которые принимали участие в «Марше нетунеядцев» в Бресте в прошлые выходные.',
      createdAt: new Date('2017-03-04T07:42:00'),
      author: 'Янушкевич Андрей',
      content: 'Молодых людей задержали накануне вечером и доставили в ИВС Ленинского РОВД.Правозащитный центр «Весна» сообщает предполагаемые имена задержанных — это Андрей Денюшкин, Руслан Чаликов, Александр Козлянко и Дмитрий Левчук.По информации правозащитников, на представителей анархистского движения после «Марша нетунеядцев» 5 марта устроили целую погоню по Бресту. На митинге они были одни из самых активных.',
      tags: ['криминал'],
    },
    {
      id: '20',
      title: 'Трамп подписал новый иммиграционный указ',
      summary: 'Президент США Дональд Трамп подписал новый указ об ужесточении миграционной политики, сообщили представители Белого дома. Он вступает в силу с 16 марта.',
      createdAt: new Date('2017-03-01T12:00:00'),
      author: 'Янушкевич Евгений',
      content: 'По их словам, глава государства поставил свою подпись под документом «этим утром», сама церемония прошла в закрытом для прессы режиме.Согласно документу, власти повторно на 90 дней вводят запрет на въезд для граждан Судана, Сирии, Ирана, Ливии, Сомали и Йемена. Исключение составляют те, кому ранее была выдана виза. Ранее в этот список также входил Ирак, однако теперь он из списка исключен.',
      tags: ['политика', 'криминал'],
    },
  ];
  const tags = ['мигранты', 'инцидент', 'ДТП', 'криминал', 'медицина', 'игры', 'международные', 'провакации', 'безопасность', 'протесты', 'политика'];


  function init() {
    if (localStorage.getItem('articles') == null) {
      localStorage.setItem('articles', JSON.stringify(articles));
    } else {
      articles = JSON.parse(localStorage.getItem('articles'));
      articles.forEach((article) => {
        article.createdAt = new Date(article.createdAt);
      });
    }
  }

  function getArticles(skip, top, filterConfig) {
    skip = skip || 0;
    top = top || 10;
    return filterArtilces(articles, filterConfig).slice(skip, skip + top);
  }

  function getArticlesCount(filterConfig) {
    return filterArtilces(articles, filterConfig).length;
  }

  function filterArtilces(articles, filterConfig) {
    filterConfig.fromDate = filterConfig.fromDate || new Date('01.01.2000');
    filterConfig.toDate = filterConfig.toDate || new Date();
    let newArticles = [];
    if (filterConfig && filterConfig.author) {
      for (let i = 0; i < articles.length; i++) {
        if (articles[i].author == filterConfig.author) {
          newArticles.push(articles[i]);
        }
      }
    } else {
      newArticles = articles;
    }
    if (filterConfig && filterConfig.tags) {
      newArticles = newArticles.filter(article => article.tags.some(tag => tag === filterConfig.tags));
    } else {
      newArticles = newArticles;
    }
    newArticles = newArticles.filter(article => ((article.createdAt > filterConfig.fromDate) && (article.createdAt < filterConfig.toDate)));
    newArticles = newArticles.sort();
    return newArticles;
  }


  function getArticle(ID) {
    for (let i = 0; i < articles.length; i++) {
      if (articles[i].id == ID) {
        return articles[i];
      }
    }
    return null;
  }

  function validateArticle(article) {
    if (article.id != undefined && article.title.length > 0 && article.title.length <= 100 &&
        article.summary.length > 0 && article.summary.length <= 200 &&
        article.content.length > 0 &&
        article.author.length > 0 &&
        article.createdAt != undefined &&
        article.tags.length > 0 && validateTags(article.tags)) {
      return true;
    }

    return false;
  }

  function addArticle(article) {
    if (validateArticle(article)) {
      articles.push(article);
      localStorage.setItem('articles', JSON.stringify(articles));
      return true;
    }

    return false;
  }

  function deleteArticle(ID) {
    for (let i = 0; i < articles.length; i++) {
      if (articles[i].id == ID) {
        articles.splice(i, 1);
        localStorage.setItem('articles', JSON.stringify(articles));
        return true;
      }
    }
    return false;
  }

  function editArticle(ID, article) {
    for (let i = 0; i < articles.length; i++) {
      if (articles[i].id == ID) {
        article.author = articles[i].author;
        article.createdAt = articles[i].createdAt;
        article.id = articles[i].id;
        if (validateArticle(article)) {
          articles[i] = article;
          localStorage.setItem('articles', JSON.stringify(articles));
          return true;
        }
      }
    }
    return false;
  }

  function getArticlesNumber() {
    return articles.length;
  }

  function hasTag(article, tag) {
    for (let i = 0; i < article.tags.length; i++) {
      return article.tags[i] === tag;
    }
    return false;
  }

  function validateTags(tagsArray) {
    for (let i = 0; i < tagsArray.length; i++) {
      if (tags.indexOf(tagsArray[i].toLowerCase()) === -1) {
        return false;
      }
    }
    return true;
  }

  function addTag(tag) {
    if (tags.indexOf(tag.toLowerCase()) < 0) {
      tags.push(tag.toLowerCase());
      return true;
    }
    return false;
  }

  function deleteTag(deletingTag) {
    for (let i = 0; i < tags.length; i++) {
      if (tags[i] == deletingTag.toLowerCase()) {
        tags.splice(i, 1);
      }
    }
  }

  function getTags() {
    return tags;
  }

  return {
    init,
    getArticles,
    getArticlesCount,
    filterArtilces,
    getArticle,
    validateArticle,
    addArticle,
    deleteArticle,
    editArticle,
    getArticlesNumber,
    hasTag,
    validateTags,
    addTag,
    deleteTag,
    getTags,
  };
}());

const articleRender = (function () {
  let ARTICLE_TEMPLATE;
  let ARTICLE_LIST_NODE;
  let USER;
  let articleButtons;
  let userButtons;
  function init() {
    ARTICLE_TEMPLATE = document.querySelector('#template-article-list-item');
    ARTICLE_LIST_NODE = document.querySelector('.article-list');
    articleButtons = document.querySelector('.article-list');
    articleButtons.addEventListener('click', buttons);
    userButtons = document.querySelector('.user');
    userButtons.addEventListener('click', buttons);
    document.getElementById('authorization').style.display = 'none';
    setUser();
    const tags = document.querySelector('.tags-list');
    for (let i = 0; i < articleModel.getTags().length; i++) {
      tags.innerHTML += `<option>${articleModel.getTags()[i]}</option>`;
    }
  }
  function buttons(event) {
    if (event.target.tagName !== 'BUTTON') {
      return;
    }
    if (event.target.hasAttribute('deleteButton')) {
      const articleNodeToDelete = event.target.parentElement;
      articleModel.deleteArticle(articleNodeToDelete.dataset.id);
      articleButtons.removeChild(articleNodeToDelete);
    }
    if (event.target.hasAttribute('authorizationButton')) {
      deleteAllNews();
      document.getElementById('authorization').style.display = '';
      document.querySelector('.pagination-bar').style.display = 'none';
    }
    if (event.target.hasAttribute('showMoreButton')) {
      event.target.parentElement.querySelector('.content').hidden = false;
    }
    if (event.target.hasAttribute('exitbutton')) {
      setUser();
      localStorage.removeItem('user');
      document.querySelector('.pagination-bar').style.display = '';
    }
  }
  function deleteAllNews() {
    ARTICLE_LIST_NODE.innerHTML = '';
  }
  function showArticles(articles) {
    for (let i = 0; i < articles.length; i++) {
      const temp = ARTICLE_TEMPLATE;
      temp.content.querySelector('.news-list-item').dataset.id = articles[i].id;
      temp.content.querySelector('.title').textContent = articles[i].title;
      temp.content.querySelector('.summary').textContent = articles[i].summary;
      temp.content.querySelector('.content').textContent = articles[i].content;
      temp.content.querySelector('.content').hidden = true;
      temp.content.querySelector('.author').textContent = `Автор: ${articles[i].author}`;
      temp.content.querySelector('.createdAt').textContent = `Дата создания: ${formatDate(articles[i].createdAt)}`;
      temp.content.querySelector('.tags').textContent = `Теги: ${articles[i].tags}`;
      if (USER === undefined) {
        temp.content.querySelector('.editButton').hidden = true;
        temp.content.querySelector('.deleteButton').hidden = true;
      } else {
        temp.content.querySelector('.editButton').hidden = false;
        temp.content.querySelector('.deleteButton').hidden = false;
      }
      ARTICLE_LIST_NODE.appendChild(temp.content.querySelector('.news-list-item').cloneNode(true));
    }
  }
  function formatDate(d) {
    return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()} ${
            d.getHours()}:${d.getMinutes()}`;
  }
  function setUser(name) {
    USER = name;
    if (USER === undefined) {
      document.querySelector('.user-name').textContent = 'Гость';
      document.querySelector('.exitbutton').hidden = true;
      document.querySelector('.addArticleButton').hidden = true;
      document.querySelector('.authorization-button').hidden = false;
      for (var i = 0; i < ARTICLE_LIST_NODE.childNodes.length; i++) {
        ARTICLE_LIST_NODE.childNodes[i].querySelector('.editButton').hidden = true;
        ARTICLE_LIST_NODE.childNodes[i].querySelector('.deleteButton').hidden = true;
      }
    } else if (USER !== null) {
      document.querySelector('.user-name').textContent = USER;
      document.querySelector('.authorization-button').hidden = true;
      document.querySelector('.exitbutton').hidden = false;
      document.querySelector('.addArticleButton').hidden = false;
      for (var i = 0; i < ARTICLE_LIST_NODE.childNodes.length; i++) {
        ARTICLE_LIST_NODE.childNodes[i].querySelector('.editButton').hidden = false;
        ARTICLE_LIST_NODE.childNodes[i].querySelector('.deleteButton').hidden = false;
      }
    }
  }
  function getUser() {
    return USER;
  }
  return {
    init,
    deleteAllNews,
    buttons,
    showArticles,
    formatDate,
    setUser,
    getUser,
  };
}());

const addArticleModel = (function () {
  function addBtnClick(event) {
    document.querySelector('.pagination-bar').style.display = 'none';
    articleRender.deleteAllNews();
    document.querySelector('.editrticleForm').style.display = '';
    document.querySelector('.author').textContent = articleRender.getUser();
    document.querySelector('.createdAt').textContent = Date();
  }
  function confirmBtnClick() {
    const article = { id: articleModel.getArticlesNumber() + 1, title: '', summary: '', content: '', author: '', createdAt: '', tags: [] };
    const form = document.forms.addArticleForm;
    article.title = form.elements.title.value;
    article.summary = form.elements.summary.value;
    article.content = form.elements.content.value;
    article.author = articleRender.getUser();
    article.createdAt = new Date();
    article.tags = form.elements.tags.value.split(',');
    const tags = document.querySelector('.tags-list');
    article.tags.forEach((tag) => {
      if (articleModel.addTag(tag)) {
        tags.innerHTML += `<option>${tag}</option>`;
      }
    });
    articleModel.addArticle(article);
    document.querySelector('.addArticleForm').style.display = 'none';
    renderArticlesWithFilterConfig(filter.getFilter());
  }
  return {
    addBtnClick,
    confirmBtnClick,
  };
}());

const editArticleModel = (function () {
  let articleToEdit;
  let ID;
  let author;
  let createdAt;
  function editBtnClick(event) {
    document.querySelector('.pagination-bar').style.display = 'none';
    articleToEdit = event.target.parentElement;
    ID = articleToEdit.dataset.id;
    const title = articleToEdit.querySelector('.title').textContent;
    const summary = articleToEdit.querySelector('.summary').textContent;
    const content = articleToEdit.querySelector('.content').textContent;
    author = articleToEdit.querySelector('.author').textContent;
    createdAt = articleToEdit.querySelector('.createdAt').textContent;
    const tags = articleToEdit.querySelector('.tags').textContent.substring(6);
    articleRender.deleteAllNews();
    document.querySelector('.editArticleForm').style.display = '';
    const form = document.forms.editArticleForm;
    form.elements.title.value = title;
    form.elements.summary.value = summary;
    form.elements.content.value = content;
    document.querySelector('.editArticleForm').querySelector('.author').textContent = author;
    document.querySelector('.editArticleForm').querySelector('.createdAt').textContent = createdAt;
    form.elements.tags.value = tags;
  }
  function confirmBtnClick() {
    const article = { id: ID, title: '', summary: '', content: '', author: '', createdAt: '', tags: [] };
    const form = document.forms.editArticleForm;
    article.title = form.elements.title.value;
    article.summary = form.elements.summary.value;
    article.content = form.elements.content.value;
    article.author = author;
    article.createdAt = createdAt;
    article.tags = form.elements.tags.value.split(',');
    const tags = document.querySelector('.tags-list');
    article.tags.forEach((tag) => {
      if (articleModel.addTag(tag)) {
        tags.innerHTML += `<option>${tag}</option>`;
      }
    });
    articleModel.editArticle(ID, article);
    document.querySelector('.editArticleForm').style.display = 'none';
    renderArticlesWithFilterConfig(filter.getFilter());
  }
  return {
    editBtnClick,
    confirmBtnClick,
  };
}());

let filter = (function () {
  let form;
  let submitButton;
  let filterChangedCallback;

  function init(_filterChangedCallback) {
    form = document.forms.filter;
    submitButton = form.elements.submit;
    submitButton.addEventListener('click', handleSubmitClick);
    filterChangedCallback = _filterChangedCallback;
    if (localStorage.getItem('filter') == null) {
      return getFilter();
    }

    const filterConfig = JSON.parse(localStorage.getItem('filter'));
    return filterConfig;
  }

  function getFilter() {
    const filterConfig = { author: undefined, fromDate: undefined, toDate: undefined, tags: undefined };
    const authorSelect = form.elements.author.value;
    const fromDate = Date.parse(form.elements.fromDate.value);
    const toDate = Date.parse(form.elements.toDate.value);
    const options = [].slice.call(form.elements.tags);
    const tagSelected = options.filter(option => option.selected).map(option => option.value).join(',');
    filterConfig.author = authorSelect;
    filterConfig.fromDate = fromDate;
    filterConfig.toDate = toDate;
    filterConfig.tags = tagSelected;
    localStorage.setItem('filter', JSON.stringify(filterConfig));
    return filterConfig;
  }

  function handleSubmitClick() {
    document.querySelector('.addArticleForm').style.display = 'none';
    document.querySelector('.editArticleForm').style.display = 'none';
    document.getElementById('authorization').style.display = 'none';
    document.querySelector('.pagination-bar').style.display = '';
    return filterChangedCallback(getFilter());
  }

  return {
    init,
    getFilter,
  };
}());

const pagination = (function () {
  const ITEMS_PER_PAGE = 3; // статей на 1-ой странице
  let total; // всего статей
  let currentPage; // текущая страница
  let showMoreButton;
  let showMoreCallback; // функция, которую вызывать, когда произошел клик по кнопке
  function init(_total, _showMoreCallback) {
    currentPage = 1;
    total = _total;
    showMoreCallback = _showMoreCallback;
    showMoreButton = document.getElementById('pagination-show-more');
    showMoreButton.addEventListener('click', handleShowMoreClick);

        /* Не показывать кнопку если статей нет */
    showOrHideMoreButton();

        /* Вернуть skip, top для начальной отрисовки статей */
    return getParams();
  }

  function handleShowMoreClick() {
    const paginationParams = nextPage();
    showMoreCallback(paginationParams.skip, paginationParams.top);
  }

  function getTotalPages() {
    return Math.ceil(total / ITEMS_PER_PAGE);
  }

  function nextPage() {
    currentPage += 1;
        /* возможно, статей больше нет, спрятать кнопку */
    showOrHideMoreButton();

    return getParams();
  }

  function getParams() {
    return {
      top: ITEMS_PER_PAGE,
      skip: (currentPage - 1) * ITEMS_PER_PAGE,
    };
  }

  function showOrHideMoreButton() {
    showMoreButton.hidden = getTotalPages() <= currentPage;
  }

  return {
    init,
  };
}());

const authorization = (function () {
  function confirmBtnClick() {
    const form = document.getElementById('authorization');
    const name = form.querySelector('.name').value;
    form.querySelector('.name').value = '';
    const password = form.querySelector('.password').value;
    form.querySelector('.password').value = '';
    document.getElementById('authorization').style.display = 'none';
    renderArticlesWithFilterConfig(filter.getFilter());
    articleRender.setUser(name);
    localStorage.setItem('user', JSON.stringify(name));
  }
  return {
    confirmBtnClick,
  };
}());

document.addEventListener('DOMContentLoaded', start);

function start() {
  articleModel.init();
  articleRender.init();
  if (localStorage.getItem('user') == null) {
    articleRender.setUser();
  } else {
    articleRender.setUser(JSON.parse(localStorage.getItem('user')));
  }
  const filterConfig = filter.init(renderArticlesWithFilterConfig);
  renderArticlesWithFilterConfig(filterConfig);
}
function renderArticles(skip, top, filterConfig) {
  const articles = articleModel.getArticles(skip, top, filterConfig);
  articleRender.showArticles(articles);
}
function renderArticlesWithFilterConfig(filterConfig) {
  articleRender.deleteAllNews();
  const total = articleModel.getArticlesCount(filterConfig);
  const paginationParams = pagination.init(total, (skip, top) => {
    renderArticles(skip, top, filterConfig);
  });
  renderArticles(paginationParams.skip, paginationParams.top, filterConfig);
}
