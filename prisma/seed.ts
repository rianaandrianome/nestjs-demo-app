import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  const p1 = await prisma.product.upsert({
    where: { name: 'Macbook Air laptop' },
    update: {},
    create: {
      name: 'Macbook Air laptop',
      description: 'This is the description for Macbook air laptop',
      images: [
        'https://m.media-amazon.com/images/I/71N+DK0pEaL._AC_SX569_.jpg',
        'https://reviewed-com-res.cloudinary.com/image/fetch/s--LS2KHGFp--/b_white,c_fill,cs_srgb,f_auto,fl_progressive.strip_profile,g_auto,h_547,q_auto,w_972/https://reviewed-production.s3.amazonaws.com/1607081088000/DSC_0877.jpg',
      ],
    },
  });

  const p2 = await prisma.product.upsert({
    where: { name: 'Samsung S22 Android' },
    update: {},
    create: {
      name: 'Samsung S22 Android',
      description: 'This is the description for the Samsung S22',
      images: [
        'https://fdn.gsmarena.com/imgroot/news/22/02/samsung-galaxy-s22-hot-take/inline/-1200w5/gsmarena_003.jpg',
        'https://guycom.mg/wp-content/uploads/2022/03/LD0005928708_1_0005928719_0005928744.jpg',
      ],
    },
  });

  console.log({ p1, p2 });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
