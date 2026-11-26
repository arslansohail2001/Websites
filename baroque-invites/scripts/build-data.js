const fs = require('fs');
const path = require('path');

const manifestPath = path.join(__dirname, '..', 'baroque-invites-assets', 'manifest.json');
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));

const inviteItems = [];
let id = 1;

for (const [cat, urls] of Object.entries(manifest.invites.by_category || {})) {
  urls.forEach((url, i) => {
    const filename = url.split('/').pop();
    const filePath = path.join(__dirname, '..', 'public', 'assets', 'invites', filename);
    if (fs.existsSync(filePath)) {
      inviteItems.push({
        _id: 'inv_' + id++,
        title: `${cat} Suite ${i + 1}`,
        category: cat,
        galleryType: 'invites',
        imageUrl: `/assets/invites/${filename}`,
        altText: `Baroque luxury ${cat} invitation ${i + 1}`,
        order: id,
        featured: i < 2
      });
    }
  });
}

const boxItems = [];
let bId = 1;
const boxDir = path.join(__dirname, '..', 'public', 'assets', 'boxes');
const boxFiles = fs.readdirSync(boxDir);

const boxCategoryMap = manifest.boxes?.by_category || {};
const assignedBoxes = new Set();

for (const [cat, urls] of Object.entries(boxCategoryMap)) {
  (urls || []).forEach((url, i) => {
    if (!url) return;
    const filename = url.split('/').pop();
    const filePath = path.join(boxDir, filename);
    if (fs.existsSync(filePath)) {
      assignedBoxes.add(filename);
      boxItems.push({
        _id: 'box_' + bId++,
        title: `${cat} Design ${i + 1}`,
        category: cat,
        galleryType: 'boxes',
        imageUrl: `/assets/boxes/${filename}`,
        altText: `Baroque bespoke ${cat} ${i + 1}`,
        order: bId,
        featured: i < 2
      });
    }
  });
}

const remainingBoxes = boxFiles.filter(f => !assignedBoxes.has(f) && (f.endsWith('.jpg') || f.endsWith('.png')));
const cats = ['Favor Box', 'Announcement Box', 'Card Box', 'Rigid Box', 'Packaging'];
remainingBoxes.forEach((f, idx) => {
  const cat = cats[idx % cats.length];
  boxItems.push({
    _id: 'box_' + bId++,
    title: `${cat} Set ${idx + 1}`,
    category: cat,
    galleryType: 'boxes',
    imageUrl: `/assets/boxes/${f}`,
    altText: `Baroque bespoke ${cat} ${idx + 1}`,
    order: bId,
    featured: idx < 3
  });
});

const tsContent = `export interface GalleryImage {
  _id: string;
  title: string;
  category: string;
  galleryType: "invites" | "boxes";
  imageUrl: string;
  altText: string;
  order: number;
  featured?: boolean;
}

export const placeholderInvites: GalleryImage[] = ${JSON.stringify(inviteItems, null, 2)};

export const placeholderBoxes: GalleryImage[] = ${JSON.stringify(boxItems, null, 2)};
`;

const outputPath = path.join(__dirname, '..', 'lib', 'placeholder-data.ts');
fs.writeFileSync(outputPath, tsContent, 'utf8');
console.log(`Generated ${inviteItems.length} invites and ${boxItems.length} boxes into ${outputPath}`);
