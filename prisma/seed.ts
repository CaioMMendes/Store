const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  try {
    const mousesCategory = await prisma.category.create({
      data: {
        name: "Mouses",
        slug: "mouses",
        imageURL:
          "https://drive.google.com/uc?export=view&id=1ohdS_YIvnKPcq7kwK2LWPZrzoOs1IPL5",
      },
    });

    const mouses = [
      {
        name: "Logitech MX Master 3s",
        slug: "logitech-mx-master-3s",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageURLs: [
          "https://drive.google.com/uc?export=view&id=1YpVwBKQMTRPIYXtxjInaFUTTSceWfyk7",
          "https://drive.google.com/uc?export=view&id=1O4Zb9Eq6A5OFAmP4dhtnU32HAFNiNYN",
          "https://drive.google.com/uc?export=view&id=1nCC__GrTwfosfq27WT7Wbzef6aUuNptj",
          "https://drive.google.com/uc?export=view&id=1s0JAjmzyaSXOFNtmSP9RGGJ1mMDbAela",
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
          "https://drive.google.com/uc?export=view&id=1CAZi8XOXtaBXbjZ-GjYgPRA-4CAzGMJ-",
          "https://drive.google.com/uc?export=view&id=1Ch80EU2OUzQsiglnCg-1cVOrXlz1ebdW",
          "https://drive.google.com/uc?export=view&id=1PM3K-z0n3p4XVx438ZTcOHHwJ2xUq58Y",
          "https://drive.google.com/uc?export=view&id=1sa97zmYFdMk3x0ycdP5MDJX6pw1s02ZO",
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
          "https://drive.google.com/uc?export=view&id=1r9yvcdv3Z0UNA1bFuhE0UetRIRXwMcGQ",
          "https://drive.google.com/uc?export=view&id=1xeppNdeuzP4fBHOJvC84jLQmdyjhGt_1",
          "https://drive.google.com/uc?export=view&id=1Zo5kuwgdOtuiyH3fq2qTYcbXdufpuUBc",
          "https://drive.google.com/uc?export=view&id=1CMbNJENPpISDKFfu4L4jA8UcO_gImRz5",
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
          "https://drive.google.com/uc?export=view&id=1raYNOS1WAvJLQPcTog-42PumOVkVNmdW",
          "https://drive.google.com/uc?export=view&id=1Zs_TFHzksdXYyqc9SdHdLaqcCxR6UPYv",
          "https://drive.google.com/uc?export=view&id=1V55uL2mrNGkSqWwDHjqEeAMqqov-6kaW",
          "https://drive.google.com/uc?export=view&id=1okPyJJDQLlybyQmecCA-wYbJnKE6SvKC",
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
          "https://drive.google.com/uc?export=view&id=1XLq7puqjsbvpK6jG5xOMuwnXRR5gBpCo",
          "https://drive.google.com/uc?export=view&id=1uGR6i_7DS3ZgHWxdFNNviAfjRMYkx8GZ",
          "https://drive.google.com/uc?export=view&id=1kob7A0eMgE0h2gYtklFBjqEHHTL_bUnl",
          "https://drive.google.com/uc?export=view&id=1As83EEJk6m2O6LguMxr9-1lY4LGyNTns",
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
          "https://drive.google.com/uc?export=view&id=19JnoSnjt9BxYiOeWHpuyQ2AsUHcAPsnY",
      },
    });

    const keyboards = [
      {
        name: "Logitech MX Keys Mini",
        slug: "logitech-mx-keys-mini",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageURLs: [
          "https://drive.google.com/uc?export=view&id=1QOB_YHWLUddkJdQ17K1uqNtxSxryMNXy",
          "https://drive.google.com/uc?export=view&id=1BuePxwJLgUD-yjAq4ekXx6idIT2wCi38",
          "https://drive.google.com/uc?export=view&id=13TSYAaMEeJF2mAKuUDubRvJ2qOy0XOUk",
          "https://drive.google.com/uc?export=view&id=1zdWpmgJ6oNaZfS_O7cU9kUDZ3Jf67N8S",
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
          "https://drive.google.com/uc?export=view&id=1SUbNPx-_dbZOO_gd3fDdUrKDqjaab9ig",
          "https://drive.google.com/uc?export=view&id=18NVFb4vozPeAu4TxbVkP9YuoGzhYGe00",
          "https://drive.google.com/uc?export=view&id=1TOAED1kAlqXSdWws8i5weCnIB7_2nylh",
          "https://drive.google.com/uc?export=view&id=1azLQJPZsO8XuOJF0BOAjkx9WZtrHluLU",
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
          "https://drive.google.com/uc?export=view&id=137oFfi3gBHodr-r2snDyo-Q4gFx1JQ3z",
          "https://drive.google.com/uc?export=view&id=1Xjdn7rdOWzBOksTg9FabnYuYYSwt4XfZ",
          "https://drive.google.com/uc?export=view&id=1i-wau1LOE1CoIYPxUZdESCDI6ea29VrM",
          "https://drive.google.com/uc?export=view&id=1tv0wT4CvAA5LI_BFaTEj0YnOGXm12qRx",
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
          "https://drive.google.com/uc?export=view&id=1R5mEw_oPBsYlayTTiGHYizXlW56bfVHf",
          "https://drive.google.com/uc?export=view&id=10AT3zrlRKrGFQNZfHG639oQgnydMmcBn",
          "https://drive.google.com/uc?export=view&id=1jxaq2Z_Rgx_NYzA8rdQfWYvAoFGeOFSD",
          "https://drive.google.com/uc?export=view&id=1Ks1FK8L-42rl76312UueTdMDFlqgRZlY",
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
          "https://drive.google.com/uc?export=view&id=1mgxQgoKEbzdvtbnjxMpRHl6e62Wh9yck",
          "https://drive.google.com/uc?export=view&id=1A76_068GQOfjL1ho5AF1Rb9tD_pF4aDA",
          "https://drive.google.com/uc?export=view&id=1GbFXI3zZhYjoku7-iXmgdNCtXP40q8VY",
          "https://drive.google.com/uc?export=view&id=1vDu8faijM1QMMstdEtnmxLUT6m9rL-RY",
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
          "https://drive.google.com/uc?export=view&id=16x2nzNOOFaj0tFbuilLck6suC4p9o4Ro",
          "https://drive.google.com/uc?export=view&id=1nJQHICgQKsZ4ZA7m_D3JYQ1AtA78U2Ac",
          "https://drive.google.com/uc?export=view&id=133dCSByZa_2rPtk0clslET_5LnzY1GFI",
          "https://drive.google.com/uc?export=view&id=1stM6aHHTm-J9VsREozIhTT7w6u0a6fDE",
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
          "https://drive.google.com/uc?export=view&id=1GHx4CsBJ5L2KOickWBf3f3oGkl5NNdtx",
      },
    });

    const headphones = [
      {
        name: "Logitech Zone Vibe 100",
        slug: "logitech-zone-vibe-100",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageURLs: [
          "https://drive.google.com/uc?export=view&id=13QKKUnSd1Sbf5L-UJyulzjzDv4K92IxW",
          "https://drive.google.com/uc?export=view&id=1lJpwtSYnsib3zPq7SiIRp1iGde6B4DcL",
          "https://drive.google.com/uc?export=view&id=1KPSYynGxaVvjDu584DpgoBd6KlC_aQIW",
          "https://drive.google.com/uc?export=view&id=1bkgpZBbQ25q2QNQ6NkFXi6Fg8y67sX4X",
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
          "https://drive.google.com/uc?export=view&id=18Lmdx1Nu1odagzJP4BRCijdf7TJOpNUM",
          "https://drive.google.com/uc?export=view&id=1Sw3SeVEDKTKUhJZ_AOcDefdOKpbnMapo",
          "https://drive.google.com/uc?export=view&id=1dfgooCgwkDpdCVi3xRzvWll8js_1yWPh",
          "https://drive.google.com/uc?export=view&id=15sXHBwxse1S5dzaIdnQzDHokrGtbGPdR",
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
          "https://drive.google.com/uc?export=view&id=1szyEjWr2vPNFjJm4u5TyyEsO7fj0W4e8",
          "https://drive.google.com/uc?export=view&id=11nEr-skCI9kOJ0_z0B1aWpIIjAeE7WXb",
          "https://drive.google.com/uc?export=view&id=1xjcpYAYEIScXVG1NmqAjxJi2lV_vtkUt",
          "https://drive.google.com/uc?export=view&id=1MVXkY8_qEFWXNwVmqzrWj3KzV2oPmAau",
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
          "https://drive.google.com/uc?export=view&id=1sbbXgJjMdkZCsN7HvUj-VIfczxiu6tze",
          "https://drive.google.com/uc?export=view&id=1vd8oj34qkQDPJFt5SwOd1xl23bhD8o7N",
          "https://drive.google.com/uc?export=view&id=1f3nGjft4kq_Uqebhoh7C6iq_irTAFp1n",
          "https://drive.google.com/uc?export=view&id=13kP8QkxCQYfiKxZcifGfTKgsiF9E62cF",
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
          "https://drive.google.com/uc?export=view&id=14-ufP2ZXdhZF8dlft5AbxOqFXg21nEjy",
          "https://drive.google.com/uc?export=view&id=11EkGHNIdURcljPTX1iml1OG7xfCJgnRp",
          "https://drive.google.com/uc?export=view&id=1D3F4oM0J-wyHjgkJ0v9h59XAMtdgC4gq",
          "https://drive.google.com/uc?export=view&id=1rTydHFhOUb1P1V7h5NyTsAMYtsrAcczg",
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
          "https://drive.google.com/uc?export=view&id=142RAf2aQlBwBHmAXhD7FV9EjRaZDCkbe",
          "https://drive.google.com/uc?export=view&id=1szcbDuqv3AcmEPx6Ijcj3f2ShYwqJxgD",
          "https://drive.google.com/uc?export=view&id=1_LDHFUB-b0pS_nJ41ZAT7nmZ6ptdTiXE",
          "https://drive.google.com/uc?export=view&id=13lCOAl5wYSm8uLRD-2YvwsaHJRpvFgYC",
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
          "https://drive.google.com/uc?export=view&id=1FsQQTg_ru54axvm5ryBDp-v2WQPy2SKY",
      },
    });

    const mousepads = [
      {
        name: "Logitech Powerplay",
        slug: "logitech-powerplay",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageURLs: [
          "https://drive.google.com/uc?export=view&id=1oE4RI2rg9-B8jW4x5-PfdEX3fguTIrso",
          "https://drive.google.com/uc?export=view&id=1pVCcZEsz4mUNDtEXoTlI3xmSwMO6wWV2",
          "https://drive.google.com/uc?export=view&id=1yYtOV7sqFXITpf9j1kG0Ev4-iNJYy57p",
          "https://drive.google.com/uc?export=view&id=1qVSzkndOUdpmDNNAHH2jNRwhYER48NzA",
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
          "https://drive.google.com/uc?export=view&id=1yNslwOu36-oEASVffj1HPi4lIfuGDhMb",
          "https://drive.google.com/uc?export=view&id=1k9yPQh3qlmoq1qcPV-TQPU4NWQqg-MkR",
          "https://drive.google.com/uc?export=view&id=1j4muY-ciHdUX9i_GUSORH_CSmI9mIJbU",
          "https://drive.google.com/uc?export=view&id=1sU9uMMciWPawSzqhnzH3jRFhD_9urEL-",
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
          "https://drive.google.com/uc?export=view&id=1cVRD78TpNH1LQX1mShPuH87nIoHOFlWd",
          "https://drive.google.com/uc?export=view&id=1wp-nAiXPfqRTcgngPx9WAP50Zsm3CAvx",
          "https://drive.google.com/uc?export=view&id=1hlFMXuWtb8pfs3-te_X6lJ1_RNcDm4A3",
          "https://drive.google.com/uc?export=view&id=1GPUflS7Eb0grBAJReYltjFt7gL59lO7m",
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
          "https://drive.google.com/uc?export=view&id=1G1vdpeF3MyIetZqOMxYF7yGh3Efw-Hm-",
          "https://drive.google.com/uc?export=view&id=1pZAaAExqqpkPjyug0dCqCv2YzfICG0mU",
          "https://drive.google.com/uc?export=view&id=14UFnLqKNRqF5uxYTFD9PN9VsBnAj-nyn",
          "https://drive.google.com/uc?export=view&id=12kAWNsm3BSaJNoGnlrF7cGU5wtcZQXDs",
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
          "https://drive.google.com/uc?export=view&id=1TmkmlFzGBxjf5nIeY_dWacaeaORNL25Q",
          "https://drive.google.com/uc?export=view&id=11wzL03b2HXh_bWCcy6VppjoEFvu1m0RG",
          "https://drive.google.com/uc?export=view&id=1TNhY5Q_ac1th0KGA0r0u3LUY6uWHyT1z",
          "https://drive.google.com/uc?export=view&id=1XdJA0BNXxIfCWmGND6dQ_ZLcZroIdLvR",
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
          "https://drive.google.com/uc?export=view&id=1UuA05buopT5N79OD8Vvlfa9YrWZv3nkC",
          "https://drive.google.com/uc?export=view&id=16FhlkVSanMXBKylHuXAxMA6_1-afv7l5",
          "https://drive.google.com/uc?export=view&id=17Z9GK4wzonPd2h6b6xmLtG4xK7FjENks",
          "https://drive.google.com/uc?export=view&id=1Fa5cfq8GhVMTA_BnwO9vZFcIlVe7kNFt",
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
          "https://drive.google.com/uc?export=view&id=1If_SlgNDphOhkdtd8eAXGQ6J1sIEgnwK",
      },
    });

    const monitors = [
      {
        name: "Dell S2421HN",
        slug: "dell-s2421hn",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageURLs: [
          "https://drive.google.com/uc?export=view&id=1iTV2-EgKPruz0gLRW2iq17c7sCmzSm9g",
          "https://drive.google.com/uc?export=view&id=1BEomDySukgF6AMlSFpX6I3UciHxrLURn",
          "https://drive.google.com/uc?export=view&id=1X5m19QBxyZ7taJpyEy3HtmNFb6J9AH_-",
          "https://drive.google.com/uc?export=view&id=1eAwPwxM2jU_ia3eNK22U1EcItEGsHWa_",
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
          "https://drive.google.com/uc?export=view&id=1rZGwF7MJsZzn5uiSJA5b2sOc5tLXgtIt",
          "https://drive.google.com/uc?export=view&id=1HKwAMAFAXzf5WIqq8S-y27x5uZ-JX83K",
          "https://drive.google.com/uc?export=view&id=1uWqjJIAHkbaQvMiuDqxhpvMaR9muqZ15",
          "https://drive.google.com/uc?export=view&id=1hpTwAK2IKUoMha7vYagf0HCkH2h7CkSv",
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
          "https://drive.google.com/uc?export=view&id=1nI6jN5ohY_pCrObbqj7ji7_Bj3NVY4gL",
          "https://drive.google.com/uc?export=view&id=1g4gFu2xrHy6Xbv9tstt8aguEjTrF9jaF",
          "https://drive.google.com/uc?export=view&id=12VULXLm7-c4-7rHpzRwThnd5sup1LQTH",
          "https://drive.google.com/uc?export=view&id=1Ln95K6o7wBFscxkvKue6i7rZOP5WHQax",
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
          "https://drive.google.com/uc?export=view&id=1qMic5dDdrknGT__Wm2K3a6WpwlIfWvqD",
          "https://drive.google.com/uc?export=view&id=1rpZdqXXzcMnOU_s7TcuRreo9S_B26gIq",
          "https://drive.google.com/uc?export=view&id=1CIxDBKo8VMevVHPPXrd2HJmsiLYv1c9R",
          "https://drive.google.com/uc?export=view&id=1zwTj6hIU1G9FecbQoJHv9iECqM4ABU_n",
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
          "https://drive.google.com/uc?export=view&id=1yhMP3eC_C4kD6vXbP7ODYhWFdaZrEcWt",
          "https://drive.google.com/uc?export=view&id=17268z3ibFduUMAZvr0MflN9GLpy9hZCQ",
          "https://drive.google.com/uc?export=view&id=1o5Uk6vKeHSfflMoFmBe2CgKtNwVvFrpo",
          "https://drive.google.com/uc?export=view&id=1AYrA64781xZ41tPgvLT9bV8Apoo6Gbsz",
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
          "https://drive.google.com/uc?export=view&id=1uouWIKSgEcQO4Weu2LcFeij_RA2ZBmV_",
          "https://drive.google.com/uc?export=view&id=15vccJeZKLyfdjOulqNfXAwZEe1GTENdn",
          "https://drive.google.com/uc?export=view&id=1-7WbBa-qzZepMe8bhxPLN9WkKHdCB5a9",
          "https://drive.google.com/uc?export=view&id=1ZlwfKEadMXwAyoOvoLozKkcRmanDg25i",
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
          "https://drive.google.com/uc?export=view&id=1WPyCOueZaMCUEs4Vu1QTtYvjOPG-9SXT",
      },
    });

    const speakers = [
      {
        name: "Logitech Surround Sound Z607",
        slug: "logitech-surround-sound-z607",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageURLs: [
          "https://drive.google.com/uc?export=view&id=1xTUuisj1OegTS6LTh4hOjqcghozc8guO",
          "https://drive.google.com/uc?export=view&id=1ilPw3-Clpn9udlCcI649NTqH6sppmMc9",
          "https://drive.google.com/uc?export=view&id=17jy_UCP3UYnm3BbkUWzJpWWTCxrMsJWL",
          "https://drive.google.com/uc?export=view&id=1QzkxlOrSMhtf68eu-8Rb0CDzEbnnktLk",
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
          "https://drive.google.com/uc?export=view&id=1cdam9o8jPx9Vxx9TVFo2RMIE0CB-aAIP",
          "https://drive.google.com/uc?export=view&id=1ggsGz9Nj0BcRHqWK7mEBzmua37w4MxN-",
          "https://drive.google.com/uc?export=view&id=1wKD44QDzlX8X4K1YrSFZt3xvR2GMVuZD",
          "https://drive.google.com/uc?export=view&id=1YU1fzNk9n2kA7f1f_dRZWYhWWahsJV3a",
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
          "https://drive.google.com/uc?export=view&id=12e04ALI0kqOh2IMDkTWFCRuk5rbokjE7",
          "https://drive.google.com/uc?export=view&id=1fEEiGlbK3oCM1Bzv8Y5xehAe2LecOqBb",
          "https://drive.google.com/uc?export=view&id=1lKA-k89en4e2rOTk3z0tUA9rJ9EXcikH",
          "https://drive.google.com/uc?export=view&id=1NgLvDJHjCZPNNzC4Z6ezR5N_llDvM2aB",
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
          "https://drive.google.com/uc?export=view&id=1AUmzu-k30NeuQyDUOc-8YYM7J3-Mz8tT",
          "https://drive.google.com/uc?export=view&id=1a5tBvg0N6TYC7SQdX8-1f5RotHDi2JWS",
          "https://drive.google.com/uc?export=view&id=1KPg34Tk7qCoLgvT0VH8fN_ttnbQm9vWz",
          "https://drive.google.com/uc?export=view&id=1XO52yakfAiTBCBP2rOtZDK4I2GG8mFjN",
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
          "https://drive.google.com/uc?export=view&id=1JeczHCiDf1o10YZgBi_tPop4-xWP0nx1",
          "https://drive.google.com/uc?export=view&id=1YW4B2jE16YM-zSELBGaOg3eyTdQz8s6A",
          "https://drive.google.com/uc?export=view&id=1Adm80g13aJR6zYuxxz4NLr0P6VCrgDHs",
          "https://drive.google.com/uc?export=view&id=1K4O8Uj20DFxEj94Kyx3caDEufy6YFF-6",
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
          "https://drive.google.com/uc?export=view&id=1Sfp6ZksAEDp7jw_rnitXOn6TeitdxhNt",
          "https://drive.google.com/uc?export=view&id=1rNscg6qsB1kI_FErhnFqUeUS3X_TTX8n",
          "https://drive.google.com/uc?export=view&id=1kkpGIwvevRItyFwlfmkaROdr9T72ZaBs",
          "https://drive.google.com/uc?export=view&id=15p6bqJjJrvqifivBJm46zEObCCVFg-j6",
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
