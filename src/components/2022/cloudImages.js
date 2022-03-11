const logo = Object.freeze({
  svgOrange: "https://res.cloudinary.com/osca/image/upload/q_auto,f_auto/v1576374332/osf/Logo/SVG/orange.svg",
  svgWhite: "https://res.cloudinary.com/osca/image/upload/q_auto,f_auto/v1576374332/osf/Logo/SVG/white.svg",
  svgBlue: "https://res.cloudinary.com/osca/image/upload/q_auto,f_auto/v1576374331/osf/Logo/SVG/blue.svg",
  svgGray: "https://res.cloudinary.com/osca/image/upload/q_auto,f_auto/v1576374332/osf/Logo/SVG/gray.svg",
  pngOrange: "https://res.cloudinary.com/osca/image/upload/q_auto,f_auto/v1576374354/osf/Logo/PNG/orange.png",
  pngWhite: "https://res.cloudinary.com/osca/image/upload/q_auto,f_auto/v1576374354/osf/Logo/PNG/white.png",
  pngBlue: "https://res.cloudinary.com/osca/image/upload/q_auto,f_auto/v1576374354/osf/Logo/PNG/blue.png",
  pngGray: "https://res.cloudinary.com/osca/image/upload/q_auto,f_auto/v1576374354/osf/Logo/PNG/gray.png"
});

const videos = {
  mainBg: "https://res.cloudinary.com/osca/video/upload/v1630281827/osf/hli7kjmf37756wtkpetm.mp4",
  mainBgMobile: "https://res.cloudinary.com/osca/image/upload/v1646646013/osf/2022/Patterns/i9aedtwylx5c5garjddj.png"
};

const patterns = Object.freeze({
  africanMap: "https://res.cloudinary.com/osca/image/upload/v1646169668/osf/2022/Patterns/k9khdrriuxkmnj3ci5t3.png",
  nextBillion: "https://res.cloudinary.com/osca/image/upload/q_auto,f_auto/v1575379564/2022/NXTBC.png",
  futureIsOpen: "https://res.cloudinary.com/osca/image/upload/v1645850627/osf/2022/n2fgn1ihdrewlskux1pi.svg",
  circle: "https://res.cloudinary.com/osca/image/upload/v1645558289/osf/2022/Patterns/lyaio7upizhsud5jhvya.svg",
  fullCircle: "https://res.cloudinary.com/osca/image/upload/v1645558434/osf/2022/Patterns/kxazrjyjhfnxe1n8uhio.svg",
  halfCircle: "https://res.cloudinary.com/osca/image/upload/v1645558479/osf/2022/Patterns/abw4pdeo6inr5jj9ghp7.svg",
  background: "https://res.cloudinary.com/osca/image/upload/v1627924039/osf/2022/Patterns/i9aedtwylx5c5garjddj.png",
  arrow: "https://res.cloudinary.com/osca/image/upload/v1627925295/osf/2022/Patterns/wjwkkyqdeem1c3ug7vtq.png",
  twoSidedArrow: "https://res.cloudinary.com/osca/image/upload/v1645549381/osf/2022/Patterns/wcjlgvxb0gssqsxtsro0.svg",
  play: "https://res.cloudinary.com/osca/image/upload/v1646521573/osf/2022/Patterns/khzc59hcd5ocwuqadqdj.svg"
});

const speakers = Object.freeze({
  dummyImage: "https://res.cloudinary.com/osca/image/upload/v1645997775/osf/2022/Speakers/v0dcxtxhuhxs0iahjfgx.png",
  ruth: "https://res.cloudinary.com/osca/image/upload/v1646733068/osf/2022/Speakers/mrcc9f8h7orcnc1pnesl.png",
  nader: "https://res.cloudinary.com/osca/image/upload/v1646733071/osf/2022/Speakers/on8e9hytwhxae6woacv5.png",
  anjana: "https://res.cloudinary.com/osca/image/upload/v1646733073/osf/2022/Speakers/rjdtbi9jgmw01tmdrfnd.png",
  tejas: "https://res.cloudinary.com/osca/image/upload/v1646733070/osf/2022/Speakers/t3168cnkwryyk8tr21uq.png",
  stefan: "https://res.cloudinary.com/osca/image/upload/v1646818870/osf/2022/Speakers/lggcbpfna2igrq4bftvg.png",
  prosper: "https://res.cloudinary.com/osca/image/upload/v1646862205/osf/2022/Speakers/cxypzomiq9rtmhn6sjqw.png",
  dmitry: "https://res.cloudinary.com/osca/image/upload/v1646986057/osf/2022/Speakers/txs8jijpwphvnhm3xgm3.png",
  minko: "https://res.cloudinary.com/osca/image/upload/v1646986059/osf/2022/Speakers/zx9wbqjiqds3lxyz2qz5.png"
});

const sponsors = Object.freeze({
  dummyImage: "https://res.cloudinary.com/osca/image/upload/q_auto,f_auto/v1577569402/osf/2022/Sponsors/dummy.png",
  google: "https://res.cloudinary.com/osca/image/upload/v1647022562/osf/2022/Sponsors/gi9s5ioui6irxpurudvs.svg",
  meta: "https://res.cloudinary.com/osca/image/upload/v1647005049/osf/2022/Sponsors/dnealmmulnbxky1pztnw.svg",
  coil: "https://res.cloudinary.com/osca/image/upload/v1647022554/osf/2022/Sponsors/xe8p90zau7glhd98sskj.svg",
  sourcegraph: "https://res.cloudinary.com/osca/image/upload/v1647022572/osf/2022/Sponsors/lmhl7ieylsl39cqj3y9p.svg",
  polygon: "https://res.cloudinary.com/osca/image/upload/v1647022567/osf/2022/Sponsors/xs9y1xhqpmvzjyrojtrp.svg",
  aws: "https://res.cloudinary.com/osca/image/upload/v1647022547/osf/2022/Sponsors/yonxquufmmireg72rhaj.svg",
  github: "https://res.cloudinary.com/osca/image/upload/v1647022559/osf/2022/Sponsors/lzmwdzpliawkrvnuomup.svg",
  microsoft: "",
  postman: "https://res.cloudinary.com/osca/image/upload/v1647022570/osf/2022/Sponsors/duqakmfsf49p6ic0u2g9.svg",
  cncf: "https://res.cloudinary.com/osca/image/upload/v1647022551/osf/2022/Sponsors/vhobzyo9uynanuv70olg.svg",
  edgeandnode: "",
  opensuse: "https://res.cloudinary.com/osca/image/upload/v1647022564/osf/2022/Sponsors/blbtvgkto7dtnjveu6mr.svg",
  atcompany: "https://res.cloudinary.com/osca/image/upload/v1647022545/osf/2022/Sponsors/mbofum8xv1p4wkdaurcq.svg",
  fincra: "https://res.cloudinary.com/osca/image/upload/v1647022557/osf/2022/Sponsors/fkv77ctwfzb4l5fwaeio.svg",
  paystack: "",
  beopenit: "https://res.cloudinary.com/osca/image/upload/v1647022549/osf/2022/Sponsors/qgjnnbh3iwtervsgh0v6.svg"
});

const gallery = Object.freeze({
  one: "https://res.cloudinary.com/osca/image/upload/v1645998575/osf/2022/Gallery/p8vfhf6hllywvkj3fe44.png",
  two: "https://res.cloudinary.com/osca/image/upload/v1645998573/osf/2022/Gallery/sz5kz6rlyewfdkqjys7u.png",
  three: "https://res.cloudinary.com/osca/image/upload/v1645998573/osf/2022/Gallery/hnfydo2jggtrlpts4hxv.png",
  four: "https://res.cloudinary.com/osca/image/upload/v1645998576/osf/2022/Gallery/b4rcssraherpe68s71dk.png"
});

const hotels = Object.freeze({
  dummy: "https://res.cloudinary.com/osca/image/upload/q_auto,f_auto/v1578244435/osf/Hotels/dummy.jpg",
  million: "https://res.cloudinary.com/osca/image/upload/q_auto,f_auto/v1579069536/osf/Hotels/million.png",
  newcastle: "https://res.cloudinary.com/osca/image/upload/q_auto,f_auto/v1579070334/osf/Hotels/newcastle.png",
  h53: "https://res.cloudinary.com/osca/image/upload/q_auto,f_auto/v1579070596/osf/Hotels/h53.png",
  banex: "https://res.cloudinary.com/osca/image/upload/q_auto,f_auto/v1579071579/osf/Hotels/banex.png",
  splendour: "https://res.cloudinary.com/osca/image/upload/q_auto,f_auto/v1579071689/osf/Hotels/splendour.png",
  airbnb: "https://res.cloudinary.com/osca/image/upload/q_auto,f_auto/v1579070876/osf/Hotels/airbnb.png"
});

const restaurants = Object.freeze({
  dummy: "https://res.cloudinary.com/osca/image/upload/q_auto,f_auto/v1578244998/osf/Restaurants/dummy.jpg",
  cr: "https://res.cloudinary.com/osca/image/upload/q_auto,f_auto/v1581735645/osf/Restaurants/cr.png",
  kfc: "https://res.cloudinary.com/osca/image/upload/q_auto,f_auto/v1581337151/osf/Restaurants/kfc.png",
  bukka: "https://res.cloudinary.com/osca/image/upload/q_auto,f_auto/v1581337348/osf/Restaurants/bukka.png"
});

export { logo, patterns, speakers, sponsors, gallery, hotels, restaurants, videos };
