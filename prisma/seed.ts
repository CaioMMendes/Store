const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  try {
    const mousesCategory = await prisma.category.create({
      data: {
        name: "Mouses",
        slug: "mouses",
        imageURL:
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168568236569276426/mouses.png?ex=65523cfa&is=653fc7fa&hm=1cd181bb9ab2424b1d2b5ec2ae12c1fd1e740254119b91df117812ce5d125da1&",
      },
    });

    const mouses = [
      {
        name: "Logitech MX Master 3s",
        slug: "logitech-mx-master-3s",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageURLs: [
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168568308811960390/01_mx-master-3s.png?ex=65523d0b&is=653fc80b&hm=2abfbdbf1a40f2c3ce15e302ae476490a73de2f624187647a8cd3f44948db79d&",
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168568328378392667/02_mx-master-3s.png?ex=65523d10&is=653fc810&hm=fd56dbcc6cfa7c9f9d0a325d8cfc5570df634ca12612dfea3241d33e43623914&",
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168568345029779496/03_mx-master-3s.png?ex=65523d14&is=653fc814&hm=b87ab608a7fbf4a41950fc70972aca3a3b21d9c53b5cd0572688ba372bfef853&",
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168568375664980058/04_mx-master-3s.png?ex=65523d1b&is=653fc81b&hm=3d65d102c09a57a19ef64571eb007bdf4d3e39460f46c96b57b1ffd1183411fe&",
        ],
        basePrice: 650,
        categoryId: mousesCategory.id,
        discountPercentage: 10,
      },
      {
        name: "Logitech Pro X Superlight",
        slug: "logitech-pro-x-superlight",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageURLs: [
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168569211619119184/01_logi-superlight.png?ex=65523de3&is=653fc8e3&hm=00f2686e2265aee88ab0e54b9c5b694317b2337c1c9bc32eca4664efa0871686&",
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168569227825917992/02_logi-superlight.png?ex=65523de6&is=653fc8e6&hm=396e02829ee16736a7cbfea7521f64df0402a309ead1aa422a13fb4f68b99e84&",
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168569245081292820/03_logi-superlight.png?ex=65523dea&is=653fc8ea&hm=b021d13e21f44276e183896cab34a1d9ba8af449f9b8f2cd19a87bfd80d43388&",
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168569270360346664/04_logi-superlight.png?ex=65523df1&is=653fc8f1&hm=9cb4f293bfc2c2442248a3e8e3d5d70a11dd2f2ab623212c4df9eae5fa2732ac&",
        ],
        basePrice: 750,
        categoryId: mousesCategory.id,
        discountPercentage: 5, // 5% discount
      },
      {
        name: "Logitech G305 Lightspeed",
        slug: "logitech-g305-lightspeed",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageURLs: [
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168569895353581568/01_logi-lightspeed.png?ex=65523e86&is=653fc986&hm=14537b25b6707b2efa82367cf28fd960cdb97f370b7eccae07e8ed25aa7d1f6a&",
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168569948650618920/02_logi-lightspeed.png?ex=65523e92&is=653fc992&hm=8f25c6f2c7eb255b1519c2719eb627535c087150f4d24f1d12b79d4784e8bc1d&",
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168569949124562954/03_logi-lightspeed.png?ex=65523e92&is=653fc992&hm=8bec7c20e6755fa1ef5022672bde2ad94437ef50f6c90fbd0c75d783e5e67503&",
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168569949854367776/04_logi-lightspeed.png?ex=65523e93&is=653fc993&hm=4795769d2398515bef71ca4da6578d3adc036f465dee252b2d626be85b832957&",
        ],
        basePrice: 300,
        categoryId: mousesCategory.id,
        discountPercentage: 15, // 15% discount
      },
      {
        name: "Hyperx Pulsefire Dart",
        slug: "hyperx-pulsefire-dart",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageURLs: [
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168570321863987330/01_hyperx-dart.png?ex=65523eeb&is=653fc9eb&hm=0d78aa8789fb23fb7d6dbd1b9801c61adcc26dba5496fbc60795f52794a7f213&",
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168570373399384095/02_hyperx-dart.png?ex=65523ef8&is=653fc9f8&hm=2bc26cbbece441b3a1edc6e7bb383b9c9e8751bd657cc71e86001216fe1e42bc&",
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168570373642670160/03_hyperx-dart.png?ex=65523ef8&is=653fc9f8&hm=682d9ee9e4e7975d989d645338b3ffbeafc7738166e5b9b8cbd48a8ab7c7e7a5&",
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168570373927862372/04_hyperx-dart.png?ex=65523ef8&is=653fc9f8&hm=bbb2b251856b15f3637c90719b53202d5d2140a6e8a5b9ce2ab80c4e5a19127d&",
        ],
        basePrice: 600,
        categoryId: mousesCategory.id,
        discountPercentage: 10,
      },
      {
        name: "Razer Deathadder V2 Pro",
        slug: "razer-deathadder-v2-pro",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageURLs: [
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168570617298161685/01_razer-deathadder.png?ex=65523f32&is=653fca32&hm=e83b15a43a3722a456bf5b1db76e147cef1e1af15b01b3107c9c83fa2b120d29&",
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168570669341102150/02_razer-deathadder.png?ex=65523f3e&is=653fca3e&hm=9d5ee4c83548b5c7d9a36e88ca0898804913affffbe19ff58821d1cdadcb8d6a&",
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168570669626310656/03_razer-deathadder.png?ex=65523f3e&is=653fca3e&hm=493fea67e69a054583d3991ee6bccef3565b82d2f60d5333c9cec54680b8f3a8&",
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168570669911519372/04_razer-deathadder.png?ex=65523f3e&is=653fca3e&hm=a7c66f8c266dce1d67c95e571f6a3ac7c307e13d2277409f1eaff92da02a8523&",
        ],
        basePrice: 350,
        categoryId: mousesCategory.id,
        discountPercentage: 0,
      },
    ];

    await prisma.product.createMany({
      data: mouses,
    });

    const keyboardsCategory = await prisma.category.create({
      data: {
        name: "Teclados",
        slug: "keyboards",
        imageURL:
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168571614502330480/bebd6fe5-ca55-48de-ae94-6d7ddc85ff0a-pv4uj8.png?ex=6552401f&is=653fcb1f&hm=c210a1602ab575af84da1913dba6f8bf27e90ba47d4302ecb0b65fa95f9270ca&",
      },
    });

    const keyboards = [
      {
        name: "Logitech MX Keys Mini",
        slug: "logitech-mx-keys-mini",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageURLs: [
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168570893937680424/vmMdRSa.png?ex=65523f74&is=653fca74&hm=c7ff303c68411c2dbd8559ad95e0869cece6b4f80c14d9f06ed248914b026559&",
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168570916620476506/9TA0obb.png?ex=65523f79&is=653fca79&hm=08b3e96c8bb8601937564be336bde82c0294e8cf8414d9b3ba9eed44319cd5df&",
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168570948115509380/q6CFl6h.png?ex=65523f81&is=653fca81&hm=641d6cc931efdc64b9627e17957ac707f7f25a22aea96556801179d35494e006&",
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168570948379754516/hzJiRiY.png?ex=65523f81&is=653fca81&hm=4176d05a9a8739814446931abd0eecb9e0853a59a5103b9b9032f74d28ae2584&",
        ],
        basePrice: 650,
        categoryId: keyboardsCategory.id,
        discountPercentage: 10,
      },
      {
        name: "Logitech MX Keys S",
        slug: "logitech-mx-keys-s",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageURLs: [
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168571179393613835/01_logi-mx-keys-s.png?ex=65523fb8&is=653fcab8&hm=114f45b6bd78e727a2c0dbcb703a58ed1d1f3cf16db63c02b6f934fe79c2c376&",
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168571229075144704/02_logi-mx-keys-s.png?ex=65523fc4&is=653fcac4&hm=b8e6a83519d0a5f46ed4e07fd192e150a74dd59606a561430fcd8f17a55b9180&",
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168571229385527417/03_logi-mx-keys-s.png?ex=65523fc4&is=653fcac4&hm=55d757ccbb36078e94e57cf381ace9cec7ad129bd1a4cfbb2daaedf8e63b6b4f&",
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168571229742039040/04_logi-mx-keys-s.png?ex=65523fc4&is=653fcac4&hm=a586e39dbd72e0525a1fcfcd154e3fe5471c174950494042ad335b745aefe2c7&",
        ],
        basePrice: 750,
        categoryId: keyboardsCategory.id,
        discountPercentage: 10,
      },
      {
        name: "Logitech Pop Keys",
        slug: "logitech-pop-keys",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageURLs: [
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168572078853738536/01_logi-pop-keys.png?ex=6552408e&is=653fcb8e&hm=5aa7b59b8e0e87a597397548c09519de96c3bab32bee1b588722e168540ad86d&",
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168572079206039694/02_logi-pop-keys.png?ex=6552408e&is=653fcb8e&hm=69aecb455e706c215e667e1fa9f2c8eb38841cbd33deca3e5325f47848dbd140&",
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168572079554187274/03_logi-pop-keys.png?ex=6552408e&is=653fcb8e&hm=e95ab18fbe8e2c9e673075e569343b943a71f997ae41b6ab0d2cffc9a7d1cc96&",
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168572079931658320/04_logi-pop-keys.png?ex=6552408e&is=653fcb8e&hm=f8657242e2af2296b9913da25d6d341594cfa126c115a461b406ac6c9171c367&",
        ],
        basePrice: 440,
        categoryId: keyboardsCategory.id,
        discountPercentage: 5,
      },
      {
        name: "Logitech MX Mechanical",
        slug: "logitech-mx-mechanical",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageURLs: [
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168572392377958420/01_logi-mx-mechanical.png?ex=655240d9&is=653fcbd9&hm=d664e8ae7ccba47ccc0ca0c77e1297b3aa2e7537259331b5e13d446973ca1d82&",
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168572392919027742/02_logi-mx-mechanical.png?ex=655240d9&is=653fcbd9&hm=f3f21d50b4d2fdbcda1273ca0a06e57f1451a61b1ed2c75b979cb4f5fdeb4101&",
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168572393262944326/03_logi-mx-mechanical.png?ex=655240d9&is=653fcbd9&hm=386c5689be6006c02f990fbdc2a3a888f592d9a8e141d29f9b5b1f6e50d65ac3&",
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168572393757884497/04_logi-mx-mechanical.png?ex=655240d9&is=653fcbd9&hm=4890ad28bf236160a91943c5f3fb25556acb8260bf96f24ba669fa9f4dc6eade&",
        ],
        basePrice: 700,
        categoryId: keyboardsCategory.id,
        discountPercentage: 15,
      },
      {
        name: "Epomaker TH80",
        slug: "epomaker-th80",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageURLs: [
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168572668560285747/01_epomaker-th80.png?ex=6552411b&is=653fcc1b&hm=0fb64ec9ce494b0b576964ad33949394b7582467ebd73d2ab3000ebb0c0f501f&",
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168572668862283846/02_epomaker-th80.png?ex=6552411b&is=653fcc1b&hm=587cc33b9ec06dc5005a10e5c7d5f1e527cf8496c7ea093107a90e865a9ed3a1&",
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168572669130702939/03_epomaker-th80.png?ex=6552411b&is=653fcc1b&hm=5ba865bfc16264874cfa51ba7683dcd96a1b208179610a8bfe2995d193f2ca80&",
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168572669420118086/04_epomaker-th80.png?ex=6552411b&is=653fcc1b&hm=a51a557a7dd4e2e7c56fe1a7aeb1e60c2e499b6214c3af8c6e72e2e1f163f162&",
        ],
        basePrice: 500,
        categoryId: keyboardsCategory.id,
        discountPercentage: 5,
      },
      {
        name: "Redragon Gamer Ashe",
        slug: "redragon-gamer-ashe",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageURLs: [
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168572991328759868/01_redragon-gamer-ashe.png?ex=65524168&is=653fcc68&hm=a57aa2749029fa56a9365908508b76fde1341a9bb5f935ceb2465ce094095c3c&",
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168572991748178050/02_redragon-gamer-ashe.png?ex=65524168&is=653fcc68&hm=714f964c44bf44d2db103e1d4bc2ce75698240d705909550213645271fd467a6&",
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168572992461221999/03_redragon-gamer-ashe.png?ex=65524168&is=653fcc68&hm=4c803435835c65fd3cfb00158dbd0009ca81fc6b86e1a5fb6bc1fb3181e7efea&",
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168572992901632080/04_redragon-gamer-ashe.png?ex=65524168&is=653fcc68&hm=7ac6da0442e1e0885b9800007820832154e1aac1dfee1ebd57188d442c0a9fe3&",
        ],
        basePrice: 400,
        categoryId: keyboardsCategory.id,
        discountPercentage: 25,
      },
    ];

    await prisma.product.createMany({
      data: keyboards,
    });

    const headphonesCategory = await prisma.category.create({
      data: {
        name: "Fones",
        slug: "headphones",
        imageURL:
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168573233570795531/headphones.png?ex=655241a1&is=653fcca1&hm=a03dba990bc0025cc179f66f108c20b25e824b005e8d53b444d8a96893b28370&",
      },
    });

    const headphones = [
      {
        name: "Logitech Zone Vibe 100",
        slug: "logitech-zone-vibe-100",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageURLs: [
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168573390517457037/01_logi-vibe.png?ex=655241c7&is=653fccc7&hm=a0247e38837e66ebee4a3e2df3cb02bb8757cc4aab3baf8a94899f2e20248830&",
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168573390894927904/02_logi-vibe.png?ex=655241c7&is=653fccc7&hm=a91748417561616623a832a5896414cfcaeba52483a4b5adbb98b2f97248fe80&",
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168573391230488606/03_logi-vibe.png?ex=655241c7&is=653fccc7&hm=02a5fe98d299cb8d22932d5e00a21f72994a68f24f4e29e09b5950bb5b495567&",
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168573391570210947/04_logi-vibe.png?ex=655241c7&is=653fccc7&hm=141a66d6166b73db2ba46721f3749b817df83f4ff303c551f90079f5581ab2a2&",
        ],
        basePrice: 750,
        categoryId: headphonesCategory.id,
        discountPercentage: 10,
      },
      {
        name: "Logitech Pro X 2 Lightspeed",
        slug: "logitech-pro-x-2-lightspeed",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageURLs: [
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168573615525089302/01_logi-lightspeed-phone.png?ex=655241fc&is=653fccfc&hm=c21c5a5bfba0b7b8353ac80e43a957206a5aae431f25759ae184c937e4cbe84a&",
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168573615797710929/02_logi-lightspeed-phone.png?ex=655241fd&is=653fccfd&hm=3327e4ffcab26c7d7978179da62ea8d98086639f34de027d60fc34050d641924&",
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168573616112279552/03_logi-lightspeed-phone.png?ex=655241fd&is=653fccfd&hm=72187ab4b749d9dde8ca5ffb354ba8de36fdc6357c625666869a31541f5aeed3&",
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168573616561082408/04_logi-lightspeed-phone.png?ex=655241fd&is=653fccfd&hm=564417a90d53db3fbba46b0471024a42f9609e3d92fb41bb014d7774994d1ea3&",
        ],
        basePrice: 1200,
        categoryId: headphonesCategory.id,
        discountPercentage: 5,
      },
      {
        name: "Logitech Astro A30",
        slug: "logitech-astro-a30",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageURLs: [
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168573782680670279/01_logi-astro-a30.png?ex=65524224&is=653fcd24&hm=57049d2b0d0a2f0fc1ebd105c58039d73b068573fc4f901d277ddfa61457e05c&",
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168573832001499167/02_logi-astro-a30.png?ex=65524230&is=653fcd30&hm=0903c844d5f0b123b404c1ac2becd4867d273f0ee57724c75a57ebb1d7f8c466&",
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168573832584515655/03_logi-astro-a30.png?ex=65524230&is=653fcd30&hm=ecb53d1564ef6d34f89aa7ca58f11fad99cddd49ba1713ef910c358d0d1efe13&",
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168573833117188126/04_logi-astro-a30.png?ex=65524230&is=653fcd30&hm=70e6fd7f1c57a6efa655cd9de71f2e7c5a2d0868357614798cfac440de78003d&",
        ],
        basePrice: 1500,
        categoryId: headphonesCategory.id,
        discountPercentage: 15,
      },
      {
        name: "Logitech Zone Wired Earbuds",
        slug: "logitech-zone-wired-earbuds",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageURLs: [
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168574684477005875/01_logi-earbuds.png?ex=655242fb&is=653fcdfb&hm=b31b045be25d4e680b6414c19acf4091084788c220d96a0b20a441db94b24c4b&",
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168574684737065122/02_logi-earbuds.png?ex=655242fb&is=653fcdfb&hm=c9922343b2e0bbe70c2d0bff55d56bccb5845b4144fa306ecccad1974ef8d18d&",
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168574685076795462/03_logi-earbuds.png?ex=655242fb&is=653fcdfb&hm=a6d079039ac1121066533614f5e1dbcd1bdfaa6141fe09677c952e1b5409bccd&",
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168574685353615470/04_logi-earbuds.png?ex=655242fc&is=653fcdfc&hm=a460a49752204977e654dca824f0b1f657c0ffcc6d3e2978e6fe898bb48ea00c&",
        ],
        basePrice: 550,
        categoryId: headphonesCategory.id,
        discountPercentage: 5,
      },
      {
        name: "Hyperx Cloud Stinger 2",
        slug: "hyperx-cloud-stinger-2",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageURLs: [
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168574914723332247/01_hyperx-stinger.png?ex=65524332&is=653fce32&hm=8306638f636ecb03013d1dd3133cbcbdf818ec38100029c8724f1928b1698f22&",
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168574915050475621/02_hyperx-stinger.png?ex=65524332&is=653fce32&hm=64f49c729b0cb33395840d110579e57d1422aad3d1755ee436603bcc20916979&",
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168574915365044274/03_hyperx-stinger.png?ex=65524332&is=653fce32&hm=83e0bd34273513a18dd74a1f1df044acce7a00b02aee2f8749ad368f1418ce72&",
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168574915746742352/04_hyperx-stinger.png?ex=65524332&is=653fce32&hm=3d9181c1a9ec9e4899e33209c3606108d1d0af755d3cd99856835f22d73bbbdf&",
        ],
        basePrice: 250,
        categoryId: headphonesCategory.id,
        discountPercentage: 0,
      },
      {
        name: "Razer Kraken X",
        slug: "razer-kraken-x",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageURLs: [
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168576625521209504/01_razer-kraken.png?ex=655244ca&is=653fcfca&hm=ab3290e521c4ad6e8fb837d67b8fc7a68afba20cbe1717aa4b0ac6e1a0645212&",
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168576625848356904/02_razer-kraken.png?ex=655244ca&is=653fcfca&hm=f0ba0878dc3672a56bf17a12a53c02bde5a929293a23f66548be29a4f3a1483a&",
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168576626146148443/03_razer-kraken.png?ex=655244ca&is=653fcfca&hm=c99fd211ddc6ab5b2c942eba56ebbe87aefffe06b45816e9101f121a8cb6596f&",
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168576626448150558/04_razer-kraken.png?ex=655244ca&is=653fcfca&hm=611beb914a97127a9a4d28b01c037e66f598a816fe7c232c5e180f3f1c0cd224&",
        ],
        basePrice: 200,
        categoryId: headphonesCategory.id,
        discountPercentage: 0,
      },
    ];

    await prisma.product.createMany({
      data: headphones,
    });

    const mousepadsCategory = await prisma.category.create({
      data: {
        name: "Mousepads",
        slug: "mousepads",
        imageURL:
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168578572005421128/mousepads.png?ex=6552469a&is=653fd19a&hm=62ce7a82fcdabfab0d51fb9e57587042400cb30f5d7e1542e14718da0e33c5fd&",
      },
    });

    const mousepads = [
      {
        name: "Logitech Powerplay",
        slug: "logitech-powerplay",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageURLs: [
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168578708815216680/01_logi-powerplay.png?ex=655246bb&is=653fd1bb&hm=fdb3406b42ce92d51bef4fab7bef23f0ea40256d4b2ea5e1ae5786749aafdb21&",
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168578709217878057/02_logi-powerplay.png?ex=655246bb&is=653fd1bb&hm=d50c8fa5ccbbac6b04b220c1af033134b0bd3ac4f0c296ed9b75fa87fd07af4c&",
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168578709561819298/03_logi-powerplay.png?ex=655246bb&is=653fd1bb&hm=0ee8e7c7df77e6128ca45eef361e00ee38090106354e7f1bc2d5941584f7e3b6&",
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168578709922512906/04_logi-powerplay.png?ex=655246bb&is=653fd1bb&hm=045f51fc52dd3405176550c6f76837c5cd8381099d28b7ba4ad2d2474faad89f&",
        ],
        basePrice: 950,
        categoryId: mousepadsCategory.id,
        discountPercentage: 10,
      },
      {
        name: "Logitech Desk Mat",
        slug: "logitech-desk-mat",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageURLs: [
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168579566755909763/01_logi-desk-mat.png?ex=65524787&is=653fd287&hm=186eb0025f2dd8b0444cbaffd29b1001fb2936f04a9a550c842d742f8e264f4f&",
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168579567238258819/02_logi-desk-mat.png?ex=65524787&is=653fd287&hm=dd80efcbd03f630d7ffb01f9e73f32acbfa0a350a46bd106685dfc1c1afc70a8&",
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168579567577993297/03_logi-desk-mat.png?ex=65524788&is=653fd288&hm=2cf33bd345a48a7c433d4a66b5e1714320b89bb391697571d4b26212d27e1ea4&",
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168579568068731072/04_logi-desk-mat.png?ex=65524788&is=653fd288&hm=befc72d69d7090f94d80850c5f9eedcd781c90038078ca297237ba9ca1ed65e6&",
        ],
        basePrice: 150,
        categoryId: mousepadsCategory.id,
        discountPercentage: 0,
      },
      {
        name: "Logitech G740",
        slug: "logitech-g740",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageURLs: [
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168579773908394014/01_logi-g740.png?ex=655247b9&is=653fd2b9&hm=e0fc533f5c7011e1be9c426ee6231c21518cdddb78b7546cea59a0b2016acc1d&",
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168579774227153017/02_logi-g740.png?ex=655247b9&is=653fd2b9&hm=8c4ffe5891551884ef2dae57bec47ed9dd5e0d59264479fd5c65685864ccf248&",
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168579774495600710/03_logi-g740.png?ex=655247b9&is=653fd2b9&hm=ad50fd3d08bc225ddd46ddf025c1004e2883f8e369e13ef4efe46d484bcceeaf&",
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168579774776614933/04_logi-g740.png?ex=655247b9&is=653fd2b9&hm=0266731dabe7d48ccef6280ce6b638220105c76747fe8c322571c4d373061fd3&",
        ],
        basePrice: 200,
        categoryId: mousepadsCategory.id,
        discountPercentage: 5,
      },
      {
        name: "Logitech Mousepad Studio Series",
        slug: "logitech-mousepad-studio-series",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageURLs: [
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168581098960338984/01_logi-studio-series.png?ex=655248f5&is=653fd3f5&hm=e274122806e5322aadf983b3fbd63e727d180fe06a408d3543a82923a1e5b733&",
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168581099287498802/02_logi-studio-series.png?ex=655248f5&is=653fd3f5&hm=1e746d836838022caeb308b7d78856b1d1e2a7baf77a6abe2b311f4eb693bbc4&",
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168581099623034981/03_logi-studio-series.png?ex=655248f5&is=653fd3f5&hm=59e08eeb492f567ab65389785495d4d5e2813c266969a808ed03e37a079b6810&",
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168581099937611896/04_logi-studio-series.png?ex=655248f5&is=653fd3f5&hm=23f4fd3417ecad229df636398bee124342dc151d415bdee8cc64c8425ea94ce7&",
        ],
        basePrice: 250,
        categoryId: mousepadsCategory.id,
        discountPercentage: 15,
      },
      {
        name: "Force One Skyhawk Dark",
        slug: "force-one-skyhawk-dark",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageURLs: [
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168581299183820840/01_force-dark.png?ex=65524924&is=653fd424&hm=1105a40b102f8376e8bce1bfb99757bfbfef53f3d72ba612d643f5b45bfbd58b&",
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168581299653591040/02_force-dark.png?ex=65524925&is=653fd425&hm=481b24c182a000e3e283abb5d40f3fc0cf54240a8eac07118c58ce8b2e395560&",
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168581299955572766/03_force-dark.png?ex=65524925&is=653fd425&hm=6691bff18dc588718f31b1f19232ddc374630d0bcc211500b8a800158ae8cb9b&",
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168581300370817204/04_force-dark.png?ex=65524925&is=653fd425&hm=85b3af8cebed0634532d99b663f554ebe90e6fa52c38d9a5e10edef1df1bb264&",
        ],
        basePrice: 300,
        categoryId: mousepadsCategory.id,
        discountPercentage: 10,
      },
      {
        name: "Force One Skyhawk Snow",
        slug: "force-one-skyhawk-snow",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageURLs: [
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168581540222087209/01_force-snow.png?ex=6552495e&is=653fd45e&hm=909d735e9546faf566b8b38e9054d62f24596ab2b19e98fb9e8b318ee2e7132a&",
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168581540570218616/02_force-snow.png?ex=6552495e&is=653fd45e&hm=6e857a9aa037780c7c3d5c0951138958c39f469926da44a9382c8ca92ad707e2&",
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168581540939313275/03_force-snow.png?ex=6552495e&is=653fd45e&hm=0b2d9bbfa150b45b2f026e9829ba3cdf364ef48350aef0e51b4a12a3ae3aa504&",
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168581541283250216/04_force-snow.png?ex=6552495e&is=653fd45e&hm=e0020eaabbd1f9064ba28a87079ef04fa517e999c8ce6368c23204818fe46e44&",
        ],
        basePrice: 300,
        categoryId: mousepadsCategory.id,
        discountPercentage: 5,
      },
    ];

    await prisma.product.createMany({
      data: mousepads,
    });

    const monitorsCategory = await prisma.category.create({
      data: {
        name: "Monitores",
        slug: "monitors",
        imageURL:
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168581701220438136/monitors.png?ex=65524984&is=653fd484&hm=608f4172a3c202a5dc7d57f5db9ca8e5a8c46c194bc2b247092d98dd10eb37c4&",
      },
    });

    const monitors = [
      {
        name: "Dell S2421HN",
        slug: "dell-s2421hn",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageURLs: [
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168581840764932156/01_dell-S2421HN.png?ex=655249a6&is=653fd4a6&hm=431a8c858eddb8d485884792e60bb17e0c95908a586a33c9c1efaa40be60de9c&",
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168581841566048408/02_dell-S2421HN.png?ex=655249a6&is=653fd4a6&hm=9a3118aca2ac37c602af8554d746494c7ea337e07bb64de9891135e456129673&",
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168581842136469554/03_dell-S2421HN.png?ex=655249a6&is=653fd4a6&hm=feb66dcae1738842a0348cc11e32d98d6f01207fbd7844a1f86a97b70263b978&",
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168581842539126834/04_dell-S2421HN.png?ex=655249a6&is=653fd4a6&hm=719e4c599a4a231411354aa10fd4f305c682ce63508731cba3e850966e8c9fe3&",
        ],
        basePrice: 1500,
        categoryId: monitorsCategory.id,
        discountPercentage: 15,
      },
      {
        name: "Dell P2422H",
        slug: "dell-p2422h",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageURLs: [
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168582042188009533/01_dell-P2422H.png?ex=655249d6&is=653fd4d6&hm=fed619538303e562fff5851af6480a00befedcb2b4d026c79a47d6e2c2c76e26&",
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168582042670334054/02_dell-P2422H.png?ex=655249d6&is=653fd4d6&hm=236c58f54f8845518491d6b9752923bda45aa455153bccff799df731c5f2f96b&",
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168582043081379941/03_dell-P2422H.png?ex=655249d6&is=653fd4d6&hm=69154f3607cbcf84bfd9655e226a41e5fe2570270f65c31442f6257f83d70aa7&",
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168582043588907048/04_dell-P2422H.png?ex=655249d6&is=653fd4d6&hm=1efcdceea99afc169eddcce1e1a3401e63eeccd85de8e6432e020d969e83c053&",
        ],
        basePrice: 2000,
        categoryId: monitorsCategory.id,
        discountPercentage: 5,
      },
      {
        name: "Dell P2723QE",
        slug: "dell-p2723qe",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageURLs: [
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168582245511090237/01_dell-P2723QE.png?ex=65524a06&is=653fd506&hm=655715907ff202c3e69d50432f9a4a10070f197ea0cfe58370d828791833aedb&",
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168582245888569394/02_dell-P2723QE.png?ex=65524a06&is=653fd506&hm=182dde98276058a7d7ede222cb8403cd503b99d482de537bf09808732c181731&",
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168582246215721002/03_dell-P2723QE.png?ex=65524a06&is=653fd506&hm=9ba7354d8bf02ce8abd7826e03e79c249e8379577c874542f16c679b554732d6&",
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168582246740021248/04_dell-P2723QE.png?ex=65524a06&is=653fd506&hm=d11d20a4d7ba710f19bee1bb51a54077f35a6025841c523d74d07bb1a612c508&",
        ],
        basePrice: 2500,
        categoryId: monitorsCategory.id,
        discountPercentage: 0,
      },
      {
        name: "Dell S3422DWG",
        slug: "dell-s3422dwg",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageURLs: [
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168582451828903986/01_dell-S3422DWG.png?ex=65524a37&is=653fd537&hm=68606e33c2a7ff16b41d0d7d3c545913c5fb5a0f6173dae36a83c7c7523ec9a7&",
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168582452151849081/02_dell-S3422DWG.png?ex=65524a37&is=653fd537&hm=6f33dac3e0b5424b5c832af6fac5be5bf9202b5f7f4738b853ada7659ad2eafd&",
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168582452462223411/03_dell-S3422DWG.png?ex=65524a37&is=653fd537&hm=6687b61f33f421380b030458a6cf83110884c94d41f0aa365380a9dffff23cfa&",
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168582452814565516/04_dell-S3422DWG.png?ex=65524a37&is=653fd537&hm=f3de02ed06ade756a07d8f6f00410f16707a3ce25dac408d41e6112f4aaaa212&",
        ],
        basePrice: 3200,
        categoryId: monitorsCategory.id,
        discountPercentage: 0,
      },
      {
        name: "Dell S3222DGM",
        slug: "dell-s3222dgm",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageURLs: [
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168582641495330877/01_dell-S3222DGM.png?ex=65524a64&is=653fd564&hm=b9ee6cb74afe8fe81f0e01456221087ee9217e90e011411e39415a808d92f4a8&",
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168582641889591336/02_dell-S3222DGM.png?ex=65524a65&is=653fd565&hm=93faa537fd55ba4eb3cb8379a787c6466ead57ef38497ff61607102f181eac44&",
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168582642262872245/03_dell-S3222DGM.png?ex=65524a65&is=653fd565&hm=da8489046bd4416c5fe9693c17e21371aed12a57916c600dbe04fcabb6321daa&",
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168582642661347408/04_dell-S3222DGM.png?ex=65524a65&is=653fd565&hm=853aa565d9346480b50b69bc229c858d581e6661884e59ebff738e9314b7571d&",
        ],
        basePrice: 3500,
        categoryId: monitorsCategory.id,
        discountPercentage: 0,
      },
      {
        name: "Dell AW2524HF",
        slug: "dell-aw2524hf",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageURLs: [
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168582853840338954/01_dell-AW2524HF.png?ex=65524a97&is=653fd597&hm=91f96067ea65b9901ea9742a4fcf070dbd1fe26a687cb7889d2aa10d3a0072a2&",
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168582854272372766/02_dell-AW2524HF.png?ex=65524a97&is=653fd597&hm=f88cabc4d80a1155f31d2e3174fa29a9d4e12d52cf3e3fc47b9d7a6fa624b861&",
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168582854645645343/03_dell-AW2524HF.png?ex=65524a97&is=653fd597&hm=b4afa2b25709cf271f050f6a17598a7f9f598bd2543e95b47d8102273d779940&",
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168582855039922227/04_dell-AW2524HF.png?ex=65524a97&is=653fd597&hm=eb4da52d702a0cdcfa9f9e751e23e1cd928e47a44372428184b10a5af6bea99e&",
        ],
        basePrice: 4200,
        categoryId: monitorsCategory.id,
        discountPercentage: 10,
      },
    ];

    await prisma.product.createMany({
      data: monitors,
    });

    const speakersCategory = await prisma.category.create({
      data: {
        name: "Speakers",
        slug: "speakers",
        imageURL:
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168582996379570236/speakers.png?ex=65524ab9&is=653fd5b9&hm=0d2abe29237a2ff92709c259841f312192095a0ab45131bb9166b43168eb9783&",
      },
    });

    const speakers = [
      {
        name: "Logitech Surround Sound Z607",
        slug: "logitech-surround-sound-z607",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageURLs: [
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168583136943284296/01_logi-surround-z607.png?ex=65524adb&is=653fd5db&hm=c7704033c08e7c8d593e36f8936440dde2d3e03e4fac2be54f397c21d0f188b7&",
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168583137362726912/02_logi-surround-z607.png?ex=65524adb&is=653fd5db&hm=3dcd374857ef4043e1a404dd700708f228f809dec19f2e9c1e0fb4c0c20e7129&",
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168583137777950842/03_logi-surround-z607.png?ex=65524adb&is=653fd5db&hm=9dc9abd08170696e3848f3f1c32582764fb1f29199505eb88ce031547e6d37a7&",
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168583138105110690/04_logi-surround-z607.png?ex=65524adb&is=653fd5db&hm=024af08fc94f11c94e821889e83be9f846f256e4dec0d90868ba9b558533ddd4&",
        ],
        basePrice: 1200,
        categoryId: speakersCategory.id,
        discountPercentage: 5,
      },
      {
        name: "Logitech Dock",
        slug: "logitech-dock",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageURLs: [
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168583305155850380/01_logi-dock.png?ex=65524b03&is=653fd603&hm=793a613ac7056ce8e6a18b19ec09dd4b0310351845df9d4fbd51d302bfb4ef48&",
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168583305415884900/02_logi-dock.png?ex=65524b03&is=653fd603&hm=1d41afbd90f0447bafb1ec8aa327eb695b835512c2d7ad24e6bbe3b9a4cf536d&",
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168583305776607343/03_logi-dock.png?ex=65524b03&is=653fd603&hm=60d8521d5c5400ac3e39422c1fa9da11074c8bec8b8d43a7e386e83e64aba7d5&",
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168583306066001960/04_logi-dock.png?ex=65524b03&is=653fd603&hm=63e8aeb2946f5105863497c4f053158851c1a9b51f7b42b94f667e1d36001773&",
        ],
        basePrice: 4500,
        categoryId: speakersCategory.id,
        discountPercentage: 15,
      },
      {
        name: "Sony SA-Z9R Speakers",
        slug: "sony-sa-z9r-speakers",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageURLs: [
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168583498043506789/01_sony-SA-Z9R.png?ex=65524b31&is=653fd631&hm=8e6813242d25b2f5a14f2fd97cb6cac8862124c660b8c060e9715dad3e64e3dc&",
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168583498328723526/02_sony-SA-Z9R.png?ex=65524b31&is=653fd631&hm=6ffdae6830ce69ac29e2bea82dd610a43e976e12dab1d583173dc05625172aa8&",
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168583498626498681/03_sony-SA-Z9R.png?ex=65524b31&is=653fd631&hm=1003b607b2d7a43a7cd16b8bc16ce24367e3d5cb2ddfa9b3d3c5885b47eae531&",
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168583498928504862/04_sony-SA-Z9R.png?ex=65524b31&is=653fd631&hm=02dab7635634235a06277adeb8e1353c3acad00fb1b1fae9a254fe0a7b7078b5&",
        ],
        basePrice: 4000,
        categoryId: speakersCategory.id,
        discountPercentage: 10,
      },
      {
        name: "Sony XB43 Extra Bass",
        slug: "sony-xb43-extra-bass",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageURLs: [
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168583684077654106/01_sony-extra-bass.png?ex=65524b5d&is=653fd65d&hm=e726cdf020686e6313f77443731cb3c62757954ca527ca2efce33426106bafcd&",
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168583684425797702/02_sony-extra-bass.png?ex=65524b5d&is=653fd65d&hm=bef280ef80407c315c280e23c18ba58c24e4d2f4bc55f79ea877a0417e5bd18c&",
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168583684710994011/03_sony-extra-bass.png?ex=65524b5d&is=653fd65d&hm=0081f0731d00470cf0fdbfe0339048c3e6f1d1f6bc52f32aff5dddab114f1a7c&",
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168583685759574196/04_sony-extra-bass.png?ex=65524b5d&is=653fd65d&hm=0483156177cfd82c3bc318af8ae3f34c53ab52fc9e0a0018b9f6897f072f4fad&",
        ],
        basePrice: 3200,
        categoryId: speakersCategory.id,
        discountPercentage: 0,
      },
      {
        name: "Sony XB23 Extra Bass",
        slug: "sony-xb23-extra-bass",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageURLs: [
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168583861702234132/01_sony-XB23.png?ex=65524b87&is=653fd687&hm=e452c8b1ec81cd913f944eb618bb9f6ad6035fe7764b1eadf1a5ec7e7bb32c55&",
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168583862100705431/02_sony-XB23.png?ex=65524b87&is=653fd687&hm=f3abc7aef96a043165c16891095297d3857c414e0dad39aff41bedb75714d918&",
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168583862444622064/03_sony-XB23.png?ex=65524b88&is=653fd688&hm=6b05a346ba3d3d623e5b263106ca333f033c945e049f5ac9155c428f0f4e75a3&",
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168583862989885460/04_sony-XB23.png?ex=65524b88&is=653fd688&hm=1f0c045501d06490ea8f1114e0902e44fc94857a1722dc7e1cdc6b32ac802177&",
        ],
        basePrice: 3500,
        categoryId: speakersCategory.id,
        discountPercentage: 0,
      },
      {
        name: "Sony HT-S200F Soundbar",
        slug: "sony-ht-s200f-soundbar",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageURLs: [
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168584046096420985/01_sony-S200F.png?ex=65524bb3&is=653fd6b3&hm=19c55de5cf06d29049587a806c1a240b2ab6539a79f762c1e45cd66add64b8f9&",
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168584046415183962/02_sony-S200F.png?ex=65524bb3&is=653fd6b3&hm=1254614d4e901b802e936d3712a5008d2e40f98f2e42df190822395a95511e36&",
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168584046712991755/03_sony-S200F.png?ex=65524bb3&is=653fd6b3&hm=50471bdb11bc893fe5c654dec2d5f42017a36f591e0f1aafc29156daefae8229&",
          "https://cdn.discordapp.com/attachments/1168566657023754320/1168584047014973450/04_sony-S200F.png?ex=65524bb4&is=653fd6b4&hm=6407a9177a57882a404760faf9ebcdb64a61ed0145a23ce3140ed46fd9188c18&",
        ],
        basePrice: 2500,
        categoryId: speakersCategory.id,
        discountPercentage: 0,
      },
    ];

    await prisma.product.createMany({
      data: speakers,
    });

    console.log("Seed completed successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
