export interface GalleryImage {
  _id: string;
  title: string;
  category: string;
  galleryType: "invites" | "boxes";
  imageUrl: string;
  altText: string;
  order: number;
  featured?: boolean;
}

export const placeholderInvites: GalleryImage[] = [
  {
    "_id": "inv_1",
    "title": "New Arrival Suite 1",
    "category": "New Arrival",
    "galleryType": "invites",
    "imageUrl": "/assets/invites/tri-1.jpg",
    "altText": "Baroque luxury New Arrival invitation 1",
    "order": 2,
    "featured": true
  },
  {
    "_id": "inv_2",
    "title": "New Arrival Suite 2",
    "category": "New Arrival",
    "galleryType": "invites",
    "imageUrl": "/assets/invites/sh-1.jpg",
    "altText": "Baroque luxury New Arrival invitation 2",
    "order": 3,
    "featured": true
  },
  {
    "_id": "inv_3",
    "title": "New Arrival Suite 3",
    "category": "New Arrival",
    "galleryType": "invites",
    "imageUrl": "/assets/invites/asasas.jpg",
    "altText": "Baroque luxury New Arrival invitation 3",
    "order": 4,
    "featured": false
  },
  {
    "_id": "inv_4",
    "title": "New Arrival Suite 4",
    "category": "New Arrival",
    "galleryType": "invites",
    "imageUrl": "/assets/invites/MAROON-BUTTER-2.jpg",
    "altText": "Baroque luxury New Arrival invitation 4",
    "order": 5,
    "featured": false
  },
  {
    "_id": "inv_5",
    "title": "New Arrival Suite 5",
    "category": "New Arrival",
    "galleryType": "invites",
    "imageUrl": "/assets/invites/hr2.jpg",
    "altText": "Baroque luxury New Arrival invitation 5",
    "order": 6,
    "featured": false
  },
  {
    "_id": "inv_6",
    "title": "New Arrival Suite 6",
    "category": "New Arrival",
    "galleryType": "invites",
    "imageUrl": "/assets/invites/bt-2.jpg",
    "altText": "Baroque luxury New Arrival invitation 6",
    "order": 7,
    "featured": false
  },
  {
    "_id": "inv_7",
    "title": "New Arrival Suite 7",
    "category": "New Arrival",
    "galleryType": "invites",
    "imageUrl": "/assets/invites/butter-1.jpg",
    "altText": "Baroque luxury New Arrival invitation 7",
    "order": 8,
    "featured": false
  },
  {
    "_id": "inv_8",
    "title": "New Arrival Suite 8",
    "category": "New Arrival",
    "galleryType": "invites",
    "imageUrl": "/assets/invites/BIRD-1.jpg",
    "altText": "Baroque luxury New Arrival invitation 8",
    "order": 9,
    "featured": false
  },
  {
    "_id": "inv_9",
    "title": "New Arrival Suite 9",
    "category": "New Arrival",
    "galleryType": "invites",
    "imageUrl": "/assets/invites/MAROON-D-1.jpg",
    "altText": "Baroque luxury New Arrival invitation 9",
    "order": 10,
    "featured": false
  },
  {
    "_id": "inv_10",
    "title": "New Arrival Suite 10",
    "category": "New Arrival",
    "galleryType": "invites",
    "imageUrl": "/assets/invites/b-f-1.jpg",
    "altText": "Baroque luxury New Arrival invitation 10",
    "order": 11,
    "featured": false
  },
  {
    "_id": "inv_11",
    "title": "New Arrival Suite 11",
    "category": "New Arrival",
    "galleryType": "invites",
    "imageUrl": "/assets/invites/1.jpg",
    "altText": "Baroque luxury New Arrival invitation 11",
    "order": 12,
    "featured": false
  },
  {
    "_id": "inv_12",
    "title": "New Arrival Suite 12",
    "category": "New Arrival",
    "galleryType": "invites",
    "imageUrl": "/assets/invites/FLAP-2.jpg",
    "altText": "Baroque luxury New Arrival invitation 12",
    "order": 13,
    "featured": false
  },
  {
    "_id": "inv_13",
    "title": "New Arrival Suite 13",
    "category": "New Arrival",
    "galleryType": "invites",
    "imageUrl": "/assets/invites/d-1.jpg",
    "altText": "Baroque luxury New Arrival invitation 13",
    "order": 14,
    "featured": false
  },
  {
    "_id": "inv_14",
    "title": "New Arrival Suite 14",
    "category": "New Arrival",
    "galleryType": "invites",
    "imageUrl": "/assets/invites/20.jpg",
    "altText": "Baroque luxury New Arrival invitation 14",
    "order": 15,
    "featured": false
  },
  {
    "_id": "inv_15",
    "title": "New Arrival Suite 15",
    "category": "New Arrival",
    "galleryType": "invites",
    "imageUrl": "/assets/invites/2.jpg",
    "altText": "Baroque luxury New Arrival invitation 15",
    "order": 16,
    "featured": false
  },
  {
    "_id": "inv_16",
    "title": "New Arrival Suite 16",
    "category": "New Arrival",
    "galleryType": "invites",
    "imageUrl": "/assets/invites/11.jpg",
    "altText": "Baroque luxury New Arrival invitation 16",
    "order": 17,
    "featured": false
  },
  {
    "_id": "inv_17",
    "title": "New Arrival Suite 17",
    "category": "New Arrival",
    "galleryType": "invites",
    "imageUrl": "/assets/invites/65.jpg",
    "altText": "Baroque luxury New Arrival invitation 17",
    "order": 18,
    "featured": false
  },
  {
    "_id": "inv_18",
    "title": "New Arrival Suite 18",
    "category": "New Arrival",
    "galleryType": "invites",
    "imageUrl": "/assets/invites/17.jpg",
    "altText": "Baroque luxury New Arrival invitation 18",
    "order": 19,
    "featured": false
  },
  {
    "_id": "inv_19",
    "title": "New Arrival Suite 19",
    "category": "New Arrival",
    "galleryType": "invites",
    "imageUrl": "/assets/invites/57.jpg",
    "altText": "Baroque luxury New Arrival invitation 19",
    "order": 20,
    "featured": false
  },
  {
    "_id": "inv_20",
    "title": "Royal Suite 1",
    "category": "Royal",
    "galleryType": "invites",
    "imageUrl": "/assets/invites/sh-3.jpg",
    "altText": "Baroque luxury Royal invitation 1",
    "order": 21,
    "featured": true
  },
  {
    "_id": "inv_21",
    "title": "Royal Suite 2",
    "category": "Royal",
    "galleryType": "invites",
    "imageUrl": "/assets/invites/more-3.jpg",
    "altText": "Baroque luxury Royal invitation 2",
    "order": 22,
    "featured": true
  },
  {
    "_id": "inv_22",
    "title": "Royal Suite 3",
    "category": "Royal",
    "galleryType": "invites",
    "imageUrl": "/assets/invites/b11.jpg",
    "altText": "Baroque luxury Royal invitation 3",
    "order": 23,
    "featured": false
  },
  {
    "_id": "inv_23",
    "title": "Royal Suite 4",
    "category": "Royal",
    "galleryType": "invites",
    "imageUrl": "/assets/invites/editdd.jpg",
    "altText": "Baroque luxury Royal invitation 4",
    "order": 24,
    "featured": false
  },
  {
    "_id": "inv_24",
    "title": "Royal Suite 5",
    "category": "Royal",
    "galleryType": "invites",
    "imageUrl": "/assets/invites/72.jpg",
    "altText": "Baroque luxury Royal invitation 5",
    "order": 25,
    "featured": false
  },
  {
    "_id": "inv_25",
    "title": "Royal Suite 6",
    "category": "Royal",
    "galleryType": "invites",
    "imageUrl": "/assets/invites/54.jpg",
    "altText": "Baroque luxury Royal invitation 6",
    "order": 26,
    "featured": false
  },
  {
    "_id": "inv_26",
    "title": "Royal Suite 7",
    "category": "Royal",
    "galleryType": "invites",
    "imageUrl": "/assets/invites/68.jpg",
    "altText": "Baroque luxury Royal invitation 7",
    "order": 27,
    "featured": false
  },
  {
    "_id": "inv_27",
    "title": "Royal Suite 8",
    "category": "Royal",
    "galleryType": "invites",
    "imageUrl": "/assets/invites/63.jpg",
    "altText": "Baroque luxury Royal invitation 8",
    "order": 28,
    "featured": false
  },
  {
    "_id": "inv_28",
    "title": "Royal Suite 9",
    "category": "Royal",
    "galleryType": "invites",
    "imageUrl": "/assets/invites/69.jpg",
    "altText": "Baroque luxury Royal invitation 9",
    "order": 29,
    "featured": false
  },
  {
    "_id": "inv_29",
    "title": "Royal Suite 10",
    "category": "Royal",
    "galleryType": "invites",
    "imageUrl": "/assets/invites/1-9.jpg",
    "altText": "Baroque luxury Royal invitation 10",
    "order": 30,
    "featured": false
  },
  {
    "_id": "inv_30",
    "title": "Royal Suite 11",
    "category": "Royal",
    "galleryType": "invites",
    "imageUrl": "/assets/invites/2-9.jpg",
    "altText": "Baroque luxury Royal invitation 11",
    "order": 31,
    "featured": false
  },
  {
    "_id": "inv_31",
    "title": "Royal Suite 12",
    "category": "Royal",
    "galleryType": "invites",
    "imageUrl": "/assets/invites/3-7.jpg",
    "altText": "Baroque luxury Royal invitation 12",
    "order": 32,
    "featured": false
  },
  {
    "_id": "inv_32",
    "title": "Royal Suite 13",
    "category": "Royal",
    "galleryType": "invites",
    "imageUrl": "/assets/invites/4-7.jpg",
    "altText": "Baroque luxury Royal invitation 13",
    "order": 33,
    "featured": false
  },
  {
    "_id": "inv_33",
    "title": "Royal Suite 14",
    "category": "Royal",
    "galleryType": "invites",
    "imageUrl": "/assets/invites/5-6.jpg",
    "altText": "Baroque luxury Royal invitation 14",
    "order": 34,
    "featured": false
  },
  {
    "_id": "inv_34",
    "title": "Royal Suite 15",
    "category": "Royal",
    "galleryType": "invites",
    "imageUrl": "/assets/invites/6-4.jpg",
    "altText": "Baroque luxury Royal invitation 15",
    "order": 35,
    "featured": false
  },
  {
    "_id": "inv_35",
    "title": "Royal Suite 16",
    "category": "Royal",
    "galleryType": "invites",
    "imageUrl": "/assets/invites/7-4.jpg",
    "altText": "Baroque luxury Royal invitation 16",
    "order": 36,
    "featured": false
  },
  {
    "_id": "inv_36",
    "title": "Royal Suite 17",
    "category": "Royal",
    "galleryType": "invites",
    "imageUrl": "/assets/invites/8-4.jpg",
    "altText": "Baroque luxury Royal invitation 17",
    "order": 37,
    "featured": false
  },
  {
    "_id": "inv_37",
    "title": "Royal Suite 18",
    "category": "Royal",
    "galleryType": "invites",
    "imageUrl": "/assets/invites/9-3.jpg",
    "altText": "Baroque luxury Royal invitation 18",
    "order": 38,
    "featured": false
  },
  {
    "_id": "inv_38",
    "title": "Royal Suite 19",
    "category": "Royal",
    "galleryType": "invites",
    "imageUrl": "/assets/invites/10-3.jpg",
    "altText": "Baroque luxury Royal invitation 19",
    "order": 39,
    "featured": false
  },
  {
    "_id": "inv_39",
    "title": "Royal Suite 20",
    "category": "Royal",
    "galleryType": "invites",
    "imageUrl": "/assets/invites/11-A.jpg",
    "altText": "Baroque luxury Royal invitation 20",
    "order": 40,
    "featured": false
  },
  {
    "_id": "inv_40",
    "title": "Royal Suite 21",
    "category": "Royal",
    "galleryType": "invites",
    "imageUrl": "/assets/invites/12-A.jpg",
    "altText": "Baroque luxury Royal invitation 21",
    "order": 41,
    "featured": false
  },
  {
    "_id": "inv_41",
    "title": "Royal Suite 22",
    "category": "Royal",
    "galleryType": "invites",
    "imageUrl": "/assets/invites/13-A.jpg",
    "altText": "Baroque luxury Royal invitation 22",
    "order": 42,
    "featured": false
  },
  {
    "_id": "inv_42",
    "title": "Royal Suite 23",
    "category": "Royal",
    "galleryType": "invites",
    "imageUrl": "/assets/invites/14-A.jpg",
    "altText": "Baroque luxury Royal invitation 23",
    "order": 43,
    "featured": false
  },
  {
    "_id": "inv_43",
    "title": "Royal Suite 24",
    "category": "Royal",
    "galleryType": "invites",
    "imageUrl": "/assets/invites/61.jpg",
    "altText": "Baroque luxury Royal invitation 24",
    "order": 44,
    "featured": false
  },
  {
    "_id": "inv_44",
    "title": "Acrylic Suite 1",
    "category": "Acrylic",
    "galleryType": "invites",
    "imageUrl": "/assets/invites/40.jpg",
    "altText": "Baroque luxury Acrylic invitation 1",
    "order": 45,
    "featured": true
  },
  {
    "_id": "inv_45",
    "title": "Acrylic Suite 2",
    "category": "Acrylic",
    "galleryType": "invites",
    "imageUrl": "/assets/invites/44.jpg",
    "altText": "Baroque luxury Acrylic invitation 2",
    "order": 46,
    "featured": true
  },
  {
    "_id": "inv_46",
    "title": "Acrylic Suite 3",
    "category": "Acrylic",
    "galleryType": "invites",
    "imageUrl": "/assets/invites/46.jpg",
    "altText": "Baroque luxury Acrylic invitation 3",
    "order": 47,
    "featured": false
  },
  {
    "_id": "inv_47",
    "title": "Acrylic Suite 4",
    "category": "Acrylic",
    "galleryType": "invites",
    "imageUrl": "/assets/invites/1-5.jpg",
    "altText": "Baroque luxury Acrylic invitation 4",
    "order": 48,
    "featured": false
  },
  {
    "_id": "inv_48",
    "title": "Acrylic Suite 5",
    "category": "Acrylic",
    "galleryType": "invites",
    "imageUrl": "/assets/invites/2-5.jpg",
    "altText": "Baroque luxury Acrylic invitation 5",
    "order": 49,
    "featured": false
  },
  {
    "_id": "inv_49",
    "title": "Acrylic Suite 6",
    "category": "Acrylic",
    "galleryType": "invites",
    "imageUrl": "/assets/invites/3-3.jpg",
    "altText": "Baroque luxury Acrylic invitation 6",
    "order": 50,
    "featured": false
  },
  {
    "_id": "inv_50",
    "title": "Acrylic Suite 7",
    "category": "Acrylic",
    "galleryType": "invites",
    "imageUrl": "/assets/invites/4-3.jpg",
    "altText": "Baroque luxury Acrylic invitation 7",
    "order": 51,
    "featured": false
  },
  {
    "_id": "inv_51",
    "title": "Acrylic Suite 8",
    "category": "Acrylic",
    "galleryType": "invites",
    "imageUrl": "/assets/invites/5A.jpg",
    "altText": "Baroque luxury Acrylic invitation 8",
    "order": 52,
    "featured": false
  },
  {
    "_id": "inv_52",
    "title": "Acrylic Suite 9",
    "category": "Acrylic",
    "galleryType": "invites",
    "imageUrl": "/assets/invites/6-1.jpg",
    "altText": "Baroque luxury Acrylic invitation 9",
    "order": 53,
    "featured": false
  },
  {
    "_id": "inv_53",
    "title": "Digital Suite 1",
    "category": "Digital",
    "galleryType": "invites",
    "imageUrl": "/assets/invites/p-1.jpg",
    "altText": "Baroque luxury Digital invitation 1",
    "order": 54,
    "featured": true
  },
  {
    "_id": "inv_54",
    "title": "Digital Suite 2",
    "category": "Digital",
    "galleryType": "invites",
    "imageUrl": "/assets/invites/b2.jpg",
    "altText": "Baroque luxury Digital invitation 2",
    "order": 55,
    "featured": true
  },
  {
    "_id": "inv_55",
    "title": "Digital Suite 3",
    "category": "Digital",
    "galleryType": "invites",
    "imageUrl": "/assets/invites/MR-2.jpg",
    "altText": "Baroque luxury Digital invitation 3",
    "order": 56,
    "featured": false
  },
  {
    "_id": "inv_56",
    "title": "Digital Suite 4",
    "category": "Digital",
    "galleryType": "invites",
    "imageUrl": "/assets/invites/bb1.jpg",
    "altText": "Baroque luxury Digital invitation 4",
    "order": 57,
    "featured": false
  },
  {
    "_id": "inv_57",
    "title": "Digital Suite 5",
    "category": "Digital",
    "galleryType": "invites",
    "imageUrl": "/assets/invites/d-1.jpg",
    "altText": "Baroque luxury Digital invitation 5",
    "order": 58,
    "featured": false
  },
  {
    "_id": "inv_58",
    "title": "Digital Suite 6",
    "category": "Digital",
    "galleryType": "invites",
    "imageUrl": "/assets/invites/BIRD2.jpg",
    "altText": "Baroque luxury Digital invitation 6",
    "order": 59,
    "featured": false
  },
  {
    "_id": "inv_59",
    "title": "Digital Suite 7",
    "category": "Digital",
    "galleryType": "invites",
    "imageUrl": "/assets/invites/MAROON-D-1.jpg",
    "altText": "Baroque luxury Digital invitation 7",
    "order": 60,
    "featured": false
  },
  {
    "_id": "inv_60",
    "title": "Digital Suite 8",
    "category": "Digital",
    "galleryType": "invites",
    "imageUrl": "/assets/invites/14.jpg",
    "altText": "Baroque luxury Digital invitation 8",
    "order": 61,
    "featured": false
  },
  {
    "_id": "inv_61",
    "title": "Digital Suite 9",
    "category": "Digital",
    "galleryType": "invites",
    "imageUrl": "/assets/invites/33.jpg",
    "altText": "Baroque luxury Digital invitation 9",
    "order": 62,
    "featured": false
  },
  {
    "_id": "inv_62",
    "title": "Digital Suite 10",
    "category": "Digital",
    "galleryType": "invites",
    "imageUrl": "/assets/invites/25.jpg",
    "altText": "Baroque luxury Digital invitation 10",
    "order": 63,
    "featured": false
  },
  {
    "_id": "inv_63",
    "title": "Digital Suite 11",
    "category": "Digital",
    "galleryType": "invites",
    "imageUrl": "/assets/invites/36.jpg",
    "altText": "Baroque luxury Digital invitation 11",
    "order": 64,
    "featured": false
  },
  {
    "_id": "inv_64",
    "title": "Digital Suite 12",
    "category": "Digital",
    "galleryType": "invites",
    "imageUrl": "/assets/invites/23.jpg",
    "altText": "Baroque luxury Digital invitation 12",
    "order": 65,
    "featured": false
  },
  {
    "_id": "inv_65",
    "title": "Digital Suite 13",
    "category": "Digital",
    "galleryType": "invites",
    "imageUrl": "/assets/invites/67.jpg",
    "altText": "Baroque luxury Digital invitation 13",
    "order": 66,
    "featured": false
  },
  {
    "_id": "inv_66",
    "title": "Digital Suite 14",
    "category": "Digital",
    "galleryType": "invites",
    "imageUrl": "/assets/invites/1-7.jpg",
    "altText": "Baroque luxury Digital invitation 14",
    "order": 67,
    "featured": false
  },
  {
    "_id": "inv_67",
    "title": "Digital Suite 15",
    "category": "Digital",
    "galleryType": "invites",
    "imageUrl": "/assets/invites/10-2.jpg",
    "altText": "Baroque luxury Digital invitation 15",
    "order": 68,
    "featured": false
  },
  {
    "_id": "inv_68",
    "title": "Digital Suite 16",
    "category": "Digital",
    "galleryType": "invites",
    "imageUrl": "/assets/invites/2-7.jpg",
    "altText": "Baroque luxury Digital invitation 16",
    "order": 69,
    "featured": false
  },
  {
    "_id": "inv_69",
    "title": "Digital Suite 17",
    "category": "Digital",
    "galleryType": "invites",
    "imageUrl": "/assets/invites/3-5.jpg",
    "altText": "Baroque luxury Digital invitation 17",
    "order": 70,
    "featured": false
  },
  {
    "_id": "inv_70",
    "title": "Digital Suite 18",
    "category": "Digital",
    "galleryType": "invites",
    "imageUrl": "/assets/invites/4-5.jpg",
    "altText": "Baroque luxury Digital invitation 18",
    "order": 71,
    "featured": false
  },
  {
    "_id": "inv_71",
    "title": "Floral Suite 1",
    "category": "Floral",
    "galleryType": "invites",
    "imageUrl": "/assets/invites/15.jpg",
    "altText": "Baroque luxury Floral invitation 1",
    "order": 72,
    "featured": true
  },
  {
    "_id": "inv_72",
    "title": "Floral Suite 2",
    "category": "Floral",
    "galleryType": "invites",
    "imageUrl": "/assets/invites/48.jpg",
    "altText": "Baroque luxury Floral invitation 2",
    "order": 73,
    "featured": true
  },
  {
    "_id": "inv_73",
    "title": "Floral Suite 3",
    "category": "Floral",
    "galleryType": "invites",
    "imageUrl": "/assets/invites/30.jpg",
    "altText": "Baroque luxury Floral invitation 3",
    "order": 74,
    "featured": false
  },
  {
    "_id": "inv_74",
    "title": "Floral Suite 4",
    "category": "Floral",
    "galleryType": "invites",
    "imageUrl": "/assets/invites/39-e1737533441878.jpg",
    "altText": "Baroque luxury Floral invitation 4",
    "order": 75,
    "featured": false
  },
  {
    "_id": "inv_75",
    "title": "Floral Suite 5",
    "category": "Floral",
    "galleryType": "invites",
    "imageUrl": "/assets/invites/1-8.jpg",
    "altText": "Baroque luxury Floral invitation 5",
    "order": 76,
    "featured": false
  },
  {
    "_id": "inv_76",
    "title": "Floral Suite 6",
    "category": "Floral",
    "galleryType": "invites",
    "imageUrl": "/assets/invites/2-A.jpg",
    "altText": "Baroque luxury Floral invitation 6",
    "order": 77,
    "featured": false
  },
  {
    "_id": "inv_77",
    "title": "Floral Suite 7",
    "category": "Floral",
    "galleryType": "invites",
    "imageUrl": "/assets/invites/3-6.jpg",
    "altText": "Baroque luxury Floral invitation 7",
    "order": 78,
    "featured": false
  },
  {
    "_id": "inv_78",
    "title": "Floral Suite 8",
    "category": "Floral",
    "galleryType": "invites",
    "imageUrl": "/assets/invites/4-6.jpg",
    "altText": "Baroque luxury Floral invitation 8",
    "order": 79,
    "featured": false
  },
  {
    "_id": "inv_79",
    "title": "Floral Suite 9",
    "category": "Floral",
    "galleryType": "invites",
    "imageUrl": "/assets/invites/5-5.jpg",
    "altText": "Baroque luxury Floral invitation 9",
    "order": 80,
    "featured": false
  },
  {
    "_id": "inv_80",
    "title": "Box Invitation Suite 1",
    "category": "Box Invitation",
    "galleryType": "invites",
    "imageUrl": "/assets/invites/ms.jpg",
    "altText": "Baroque luxury Box Invitation invitation 1",
    "order": 81,
    "featured": true
  },
  {
    "_id": "inv_81",
    "title": "Box Invitation Suite 2",
    "category": "Box Invitation",
    "galleryType": "invites",
    "imageUrl": "/assets/invites/g3.jpg",
    "altText": "Baroque luxury Box Invitation invitation 2",
    "order": 82,
    "featured": true
  },
  {
    "_id": "inv_82",
    "title": "Box Invitation Suite 3",
    "category": "Box Invitation",
    "galleryType": "invites",
    "imageUrl": "/assets/invites/blue-sda-1.jpg",
    "altText": "Baroque luxury Box Invitation invitation 3",
    "order": 83,
    "featured": false
  },
  {
    "_id": "inv_83",
    "title": "Box Invitation Suite 4",
    "category": "Box Invitation",
    "galleryType": "invites",
    "imageUrl": "/assets/invites/1sasas-1.jpg",
    "altText": "Baroque luxury Box Invitation invitation 4",
    "order": 84,
    "featured": false
  },
  {
    "_id": "inv_84",
    "title": "Box Invitation Suite 5",
    "category": "Box Invitation",
    "galleryType": "invites",
    "imageUrl": "/assets/invites/sh-1.jpgddd.jpg",
    "altText": "Baroque luxury Box Invitation invitation 5",
    "order": 85,
    "featured": false
  },
  {
    "_id": "inv_85",
    "title": "Box Invitation Suite 6",
    "category": "Box Invitation",
    "galleryType": "invites",
    "imageUrl": "/assets/invites/1-6.jpg",
    "altText": "Baroque luxury Box Invitation invitation 6",
    "order": 86,
    "featured": false
  },
  {
    "_id": "inv_86",
    "title": "Box Invitation Suite 7",
    "category": "Box Invitation",
    "galleryType": "invites",
    "imageUrl": "/assets/invites/2-6.jpg",
    "altText": "Baroque luxury Box Invitation invitation 7",
    "order": 87,
    "featured": false
  },
  {
    "_id": "inv_87",
    "title": "Box Invitation Suite 8",
    "category": "Box Invitation",
    "galleryType": "invites",
    "imageUrl": "/assets/invites/3-4.jpg",
    "altText": "Baroque luxury Box Invitation invitation 8",
    "order": 88,
    "featured": false
  },
  {
    "_id": "inv_88",
    "title": "Box Invitation Suite 9",
    "category": "Box Invitation",
    "galleryType": "invites",
    "imageUrl": "/assets/invites/4-4.jpg",
    "altText": "Baroque luxury Box Invitation invitation 9",
    "order": 89,
    "featured": false
  }
];

export const placeholderBoxes: GalleryImage[] = [
  {
    "_id": "box_1",
    "title": "Favor Box Design 1",
    "category": "Favor Box",
    "galleryType": "boxes",
    "imageUrl": "/assets/boxes/t2.jpg",
    "altText": "Baroque bespoke Favor Box 1",
    "order": 2,
    "featured": true
  },
  {
    "_id": "box_2",
    "title": "Favor Box Design 2",
    "category": "Favor Box",
    "galleryType": "boxes",
    "imageUrl": "/assets/boxes/s1.jpg",
    "altText": "Baroque bespoke Favor Box 2",
    "order": 3,
    "featured": true
  },
  {
    "_id": "box_3",
    "title": "Favor Box Design 3",
    "category": "Favor Box",
    "galleryType": "boxes",
    "imageUrl": "/assets/boxes/r2.jpg",
    "altText": "Baroque bespoke Favor Box 3",
    "order": 4,
    "featured": false
  },
  {
    "_id": "box_4",
    "title": "Favor Box Design 4",
    "category": "Favor Box",
    "galleryType": "boxes",
    "imageUrl": "/assets/boxes/1-2.jpg",
    "altText": "Baroque bespoke Favor Box 4",
    "order": 5,
    "featured": false
  },
  {
    "_id": "box_5",
    "title": "Favor Box Design 5",
    "category": "Favor Box",
    "galleryType": "boxes",
    "imageUrl": "/assets/boxes/22-1.jpg",
    "altText": "Baroque bespoke Favor Box 5",
    "order": 6,
    "featured": false
  },
  {
    "_id": "box_6",
    "title": "Favor Box Design 6",
    "category": "Favor Box",
    "galleryType": "boxes",
    "imageUrl": "/assets/boxes/3-1.jpg",
    "altText": "Baroque bespoke Favor Box 6",
    "order": 7,
    "featured": false
  },
  {
    "_id": "box_7",
    "title": "Favor Box Design 7",
    "category": "Favor Box",
    "galleryType": "boxes",
    "imageUrl": "/assets/boxes/4-1.jpg",
    "altText": "Baroque bespoke Favor Box 7",
    "order": 8,
    "featured": false
  },
  {
    "_id": "box_8",
    "title": "Favor Box Design 8",
    "category": "Favor Box",
    "galleryType": "boxes",
    "imageUrl": "/assets/boxes/55.jpg",
    "altText": "Baroque bespoke Favor Box 8",
    "order": 9,
    "featured": false
  },
  {
    "_id": "box_9",
    "title": "Favor Box Design 9",
    "category": "Favor Box",
    "galleryType": "boxes",
    "imageUrl": "/assets/boxes/A2.jpg",
    "altText": "Baroque bespoke Favor Box 9",
    "order": 10,
    "featured": false
  },
  {
    "_id": "box_10",
    "title": "Announcement Box Design 1",
    "category": "Announcement Box",
    "galleryType": "boxes",
    "imageUrl": "/assets/boxes/1.jpg",
    "altText": "Baroque bespoke Announcement Box 1",
    "order": 11,
    "featured": true
  },
  {
    "_id": "box_11",
    "title": "Announcement Box Design 2",
    "category": "Announcement Box",
    "galleryType": "boxes",
    "imageUrl": "/assets/boxes/11.jpg",
    "altText": "Baroque bespoke Announcement Box 2",
    "order": 12,
    "featured": true
  },
  {
    "_id": "box_12",
    "title": "Card Box Design 1",
    "category": "Card Box",
    "galleryType": "boxes",
    "imageUrl": "/assets/boxes/s-g-2.jpg",
    "altText": "Baroque bespoke Card Box 1",
    "order": 13,
    "featured": true
  },
  {
    "_id": "box_13",
    "title": "Card Box Design 2",
    "category": "Card Box",
    "galleryType": "boxes",
    "imageUrl": "/assets/boxes/pr2.jpg",
    "altText": "Baroque bespoke Card Box 2",
    "order": 14,
    "featured": true
  },
  {
    "_id": "box_14",
    "title": "Card Box Design 3",
    "category": "Card Box",
    "galleryType": "boxes",
    "imageUrl": "/assets/boxes/rr2.jpg",
    "altText": "Baroque bespoke Card Box 3",
    "order": 15,
    "featured": false
  },
  {
    "_id": "box_15",
    "title": "Card Box Design 4",
    "category": "Card Box",
    "galleryType": "boxes",
    "imageUrl": "/assets/boxes/1-1.jpg",
    "altText": "Baroque bespoke Card Box 4",
    "order": 16,
    "featured": false
  },
  {
    "_id": "box_16",
    "title": "Card Box Design 5",
    "category": "Card Box",
    "galleryType": "boxes",
    "imageUrl": "/assets/boxes/2-1.jpg",
    "altText": "Baroque bespoke Card Box 5",
    "order": 17,
    "featured": false
  },
  {
    "_id": "box_17",
    "title": "Card Box Design 6",
    "category": "Card Box",
    "galleryType": "boxes",
    "imageUrl": "/assets/boxes/3.jpg",
    "altText": "Baroque bespoke Card Box 6",
    "order": 18,
    "featured": false
  },
  {
    "_id": "box_18",
    "title": "Card Box Design 7",
    "category": "Card Box",
    "galleryType": "boxes",
    "imageUrl": "/assets/boxes/4.jpg",
    "altText": "Baroque bespoke Card Box 7",
    "order": 19,
    "featured": false
  },
  {
    "_id": "box_19",
    "title": "Card Box Design 8",
    "category": "Card Box",
    "galleryType": "boxes",
    "imageUrl": "/assets/boxes/5.jpg",
    "altText": "Baroque bespoke Card Box 8",
    "order": 20,
    "featured": false
  },
  {
    "_id": "box_20",
    "title": "Card Box Design 9",
    "category": "Card Box",
    "galleryType": "boxes",
    "imageUrl": "/assets/boxes/6.jpg",
    "altText": "Baroque bespoke Card Box 9",
    "order": 21,
    "featured": false
  },
  {
    "_id": "box_21",
    "title": "Rigid Box Design 1",
    "category": "Rigid Box",
    "galleryType": "boxes",
    "imageUrl": "/assets/boxes/1-3.jpg",
    "altText": "Baroque bespoke Rigid Box 1",
    "order": 22,
    "featured": true
  },
  {
    "_id": "box_22",
    "title": "Rigid Box Design 2",
    "category": "Rigid Box",
    "galleryType": "boxes",
    "imageUrl": "/assets/boxes/2-3.jpg",
    "altText": "Baroque bespoke Rigid Box 2",
    "order": 23,
    "featured": true
  },
  {
    "_id": "box_23",
    "title": "Rigid Box Design 3",
    "category": "Rigid Box",
    "galleryType": "boxes",
    "imageUrl": "/assets/boxes/3-2.jpg",
    "altText": "Baroque bespoke Rigid Box 3",
    "order": 24,
    "featured": false
  },
  {
    "_id": "box_24",
    "title": "Rigid Box Design 4",
    "category": "Rigid Box",
    "galleryType": "boxes",
    "imageUrl": "/assets/boxes/4-2.jpg",
    "altText": "Baroque bespoke Rigid Box 4",
    "order": 25,
    "featured": false
  },
  {
    "_id": "box_25",
    "title": "Rigid Box Design 5",
    "category": "Rigid Box",
    "galleryType": "boxes",
    "imageUrl": "/assets/boxes/5-2.jpg",
    "altText": "Baroque bespoke Rigid Box 5",
    "order": 26,
    "featured": false
  },
  {
    "_id": "box_26",
    "title": "Favor Box Set 1",
    "category": "Favor Box",
    "galleryType": "boxes",
    "imageUrl": "/assets/boxes/10.jpg",
    "altText": "Baroque bespoke Favor Box 1",
    "order": 27,
    "featured": true
  },
  {
    "_id": "box_27",
    "title": "Announcement Box Set 2",
    "category": "Announcement Box",
    "galleryType": "boxes",
    "imageUrl": "/assets/boxes/11-1.jpg",
    "altText": "Baroque bespoke Announcement Box 2",
    "order": 28,
    "featured": true
  },
  {
    "_id": "box_28",
    "title": "Card Box Set 3",
    "category": "Card Box",
    "galleryType": "boxes",
    "imageUrl": "/assets/boxes/12a.jpg",
    "altText": "Baroque bespoke Card Box 3",
    "order": 29,
    "featured": true
  },
  {
    "_id": "box_29",
    "title": "Rigid Box Set 4",
    "category": "Rigid Box",
    "galleryType": "boxes",
    "imageUrl": "/assets/boxes/7.jpg",
    "altText": "Baroque bespoke Rigid Box 4",
    "order": 30,
    "featured": false
  },
  {
    "_id": "box_30",
    "title": "Packaging Set 5",
    "category": "Packaging",
    "galleryType": "boxes",
    "imageUrl": "/assets/boxes/8.jpg",
    "altText": "Baroque bespoke Packaging 5",
    "order": 31,
    "featured": false
  },
  {
    "_id": "box_31",
    "title": "Favor Box Set 6",
    "category": "Favor Box",
    "galleryType": "boxes",
    "imageUrl": "/assets/boxes/9.jpg",
    "altText": "Baroque bespoke Favor Box 6",
    "order": 32,
    "featured": false
  },
  {
    "_id": "box_32",
    "title": "Announcement Box Set 7",
    "category": "Announcement Box",
    "galleryType": "boxes",
    "imageUrl": "/assets/boxes/B1.jpg",
    "altText": "Baroque bespoke Announcement Box 7",
    "order": 33,
    "featured": false
  },
  {
    "_id": "box_33",
    "title": "Card Box Set 8",
    "category": "Card Box",
    "galleryType": "boxes",
    "imageUrl": "/assets/boxes/C1.jpg",
    "altText": "Baroque bespoke Card Box 8",
    "order": 34,
    "featured": false
  },
  {
    "_id": "box_34",
    "title": "Rigid Box Set 9",
    "category": "Rigid Box",
    "galleryType": "boxes",
    "imageUrl": "/assets/boxes/D1.jpg",
    "altText": "Baroque bespoke Rigid Box 9",
    "order": 35,
    "featured": false
  },
  {
    "_id": "box_35",
    "title": "Packaging Set 10",
    "category": "Packaging",
    "galleryType": "boxes",
    "imageUrl": "/assets/boxes/e2.jpg",
    "altText": "Baroque bespoke Packaging 10",
    "order": 36,
    "featured": false
  },
  {
    "_id": "box_36",
    "title": "Favor Box Set 11",
    "category": "Favor Box",
    "galleryType": "boxes",
    "imageUrl": "/assets/boxes/f1.jpg",
    "altText": "Baroque bespoke Favor Box 11",
    "order": 37,
    "featured": false
  }
];
