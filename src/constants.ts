export interface VideoProject {
  id: string;
  title: string;
  mainCategory: '短影音' | '長影片';
  subCategory: string;
  thumbnail: string;
  videoUrl: string;
  description: string;
  year: string;
  client?: string;
}

export const PROJECTS: VideoProject[] = [
  {
    id: '10',
    title: '保養品系列 Reels',
    mainCategory: '短影音',
    subCategory: '電商相關',
    thumbnail: '/剪輯露白檔1350.00_04_12_26.Still003.png',
    videoUrl: 'https://drive.google.com/file/d/1s5Zgw6budo_YFVs6qEvqyO-9t7MXWIYv/view?usp=drive_link',
    description: '電商保養品系列 Reels 短影音製作，結合精緻視覺與產品特點展示。',
    year: '2026',
    client: '電商品牌'
  },
  {
    id: '11',
    title: '藝人業配',
    mainCategory: '短影音',
    subCategory: '電商相關',
    thumbnail: '/剪輯露白檔1350.00_00_22_03.Still004.png',
    videoUrl: 'https://drive.google.com/file/d/1v2KVKtisE1TkPixAR6cGhiseT1OHSxNJ/view?usp=drive_link',
    description: '電商產品業配合作影片，透過生動的敘事提升產品吸引力。',
    year: '2026',
    client: '電商品牌'
  },
  {
    id: '12-1',
    title: '生活用品tiktok',
    mainCategory: '短影音',
    subCategory: '電商相關',
    thumbnail: '',
    videoUrl: 'https://drive.google.com/file/d/1QAXZP4gLC8xhFm6U1DkjfZgND4hjw6Ac/view?usp=drive_link',
    description: '電商生活用品 TikTok 短影音製作。',
    year: '2026',
    client: '電商品牌'
  },
  {
    id: '12',
    title: '旅行團行程',
    mainCategory: '短影音',
    subCategory: '各式產業',
    thumbnail: '/剪輯露白檔1350.00_02_01_21.Still001.png',
    videoUrl: 'https://drive.google.com/file/d/1EEDcnCOI7_rfBxMi8TFw2peSmHogl-qp/view?usp=drive_link',
    description: '旅遊行程推薦系列短影音，捕捉旅途中的精彩瞬間。',
    year: '2026',
    client: '旅遊合作夥伴'
  },
  {
    id: '12-2',
    title: '在地美食Tiktok',
    mainCategory: '短影音',
    subCategory: '各式產業',
    thumbnail: '/剪輯露白檔1350.00_06_26_18.Still005.png',
    videoUrl: 'https://drive.google.com/file/d/1TQflDyKFhZmU0FhkWqbkIqli3tXpZY1Z/view?usp=drive_link',
    description: '各式產業：在地美食 TikTok 短影音。',
    year: '2026',
    client: '在地美食'
  },
  {
    id: '12-3',
    title: '裝修服務小紅書',
    mainCategory: '短影音',
    subCategory: '各式產業',
    thumbnail: '',
    videoUrl: 'https://drive.google.com/file/d/1S1pX5dsJ2HPPTb8VN_KgE-EBR7cTM47M/view',
    description: '各式產業：裝修服務小紅書短影音。',
    year: '2026',
    client: '裝修服務'
  },
  {
    id: '13',
    title: '坐輪椅怎麼開車',
    mainCategory: '短影音',
    subCategory: 'Chairman椅人',
    thumbnail: 'https://images.unsplash.com/photo-1517076731070-13c65bcb2e86?auto=format&fit=crop&q=80&w=1000',
    videoUrl: 'https://www.youtube.com/shorts/OuuTQqfX8Gg',
    description: 'Chairman椅人系列：坐輪椅怎麼開車？生活紀實與經驗分享。',
    year: '2026',
    client: 'Chairman椅人'
  },
  {
    id: '14',
    title: '喜劇演員地獄梗對決',
    mainCategory: '短影音',
    subCategory: 'Chairman椅人',
    thumbnail: 'https://images.unsplash.com/photo-1527224857830-43a7acc85260?auto=format&fit=crop&q=80&w=1000',
    videoUrl: 'https://www.youtube.com/shorts/RMHYVSqWWoE',
    description: 'Chairman椅人系列：喜劇演員地獄梗對決，幽默與創意的碰撞。',
    year: '2026',
    client: 'Chairman椅人'
  },
  {
    id: '15',
    title: '網路幹片模仿',
    mainCategory: '短影音',
    subCategory: 'Chairman椅人',
    thumbnail: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=1000',
    videoUrl: 'https://www.youtube.com/shorts/qS4_W9WMRuk',
    description: 'Chairman椅人系列：網路幹片模仿，趣味十足的內容創作。',
    year: '2026',
    client: 'Chairman椅人'
  },
  {
    id: '16',
    title: '流量幹片',
    mainCategory: '短影音',
    subCategory: '代操頻道',
    thumbnail: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=1000',
    videoUrl: 'https://www.tiktok.com/@_kaiii.89/video/7460101586606509317',
    description: '代操頻道系列：流量幹片製作，精準掌握平台趨勢。',
    year: '2026',
    client: '代操合作夥伴'
  },
  {
    id: '17',
    title: '新車功能',
    mainCategory: '短影音',
    subCategory: '代操頻道',
    thumbnail: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=1000',
    videoUrl: 'https://www.tiktok.com/@_kaiii.89/video/7423361574116642055',
    description: '代操頻道系列：新車功能展示，專業影像呈現產品細節。',
    year: '2026',
    client: '代操合作夥伴'
  },
  {
    id: '18',
    title: '情境劇',
    mainCategory: '短影音',
    subCategory: '代操頻道',
    thumbnail: 'https://images.unsplash.com/photo-1492691523567-6170c3295db1?auto=format&fit=crop&q=80&w=1000',
    videoUrl: 'https://www.tiktok.com/@_kaiii.89/video/7420741545797766407',
    description: '代操頻道系列：情境劇剪輯，生動敘事引發共鳴。',
    year: '2026',
    client: '代操合作夥伴'
  },
  {
    id: '19',
    title: '外語翻譯',
    mainCategory: '短影音',
    subCategory: '音樂頻道',
    thumbnail: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=1000',
    videoUrl: 'https://www.instagram.com/resonance_notestw/',
    description: '音樂頻道系列：外語翻譯影片，跨文化內容呈現。',
    year: '2026',
    client: '音樂頻道'
  },
  {
    id: '19-1',
    title: 'Podcast reels',
    mainCategory: '短影音',
    subCategory: '音樂頻道',
    thumbnail: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80&w=1000',
    videoUrl: 'https://www.instagram.com/reel/DWYsvrujicY/',
    description: '音樂頻道系列：Podcast reels 精華剪輯。',
    year: '2026',
    client: '音樂頻道'
  },
  {
    id: '19-2',
    title: '音樂演講宣傳',
    mainCategory: '短影音',
    subCategory: '音樂頻道',
    thumbnail: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=1000',
    videoUrl: 'https://www.instagram.com/p/DSCcx9BEw2F/',
    description: '音樂頻道系列：音樂演講宣傳影片。',
    year: '2026',
    client: '音樂頻道'
  },
  {
    id: '20',
    title: '香氛產品形象片',
    mainCategory: '長影片',
    subCategory: '商業形象影片',
    thumbnail: 'https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?auto=format&fit=crop&q=80&w=1000',
    videoUrl: 'https://youtu.be/8R5vpOcTDO4',
    description: '商業形象影片：香氛產品形象片。',
    year: '2026',
    client: '商業品牌'
  },
  {
    id: '21',
    title: '禮盒形象片',
    mainCategory: '長影片',
    subCategory: '商業形象影片',
    thumbnail: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&q=80&w=1000',
    videoUrl: 'https://youtu.be/wPQAexrtdqg',
    description: '商業形象影片：禮盒形象片。',
    year: '2026',
    client: '商業品牌'
  },
  {
    id: '22',
    title: '議題解說——彩券行',
    mainCategory: '長影片',
    subCategory: 'Chairman椅人',
    thumbnail: 'https://images.unsplash.com/photo-1518458272338-c127749f7ad0?auto=format&fit=crop&q=80&w=1000',
    videoUrl: 'https://www.youtube.com/watch?v=k-v85sbxic4&t=61s',
    description: 'Chairman椅人系列：議題解說——彩券行。',
    year: '2026',
    client: 'Chairman椅人'
  },
  {
    id: '23',
    title: '短劇類型——輪椅族十種狀況',
    mainCategory: '長影片',
    subCategory: 'Chairman椅人',
    thumbnail: 'https://images.unsplash.com/photo-1508847154043-be5407fbed5a?auto=format&fit=crop&q=80&w=1000',
    videoUrl: 'https://www.youtube.com/watch?v=CAc6TDcYRjg',
    description: 'Chairman椅人系列：短劇類型——輪椅族十種狀況。',
    year: '2026',
    client: 'Chairman椅人'
  },
  {
    id: '24',
    title: 'VLOG',
    mainCategory: '長影片',
    subCategory: 'Chairman椅人',
    thumbnail: 'https://images.unsplash.com/photo-1492691523567-6170c3295db1?auto=format&fit=crop&q=80&w=1000',
    videoUrl: 'https://www.youtube.com/watch?v=YIAjFVc-QIc&t=221s',
    description: 'Chairman椅人系列：生活 VLOG。',
    year: '2026',
    client: 'Chairman椅人'
  },
  {
    id: '25',
    title: '紀錄片',
    mainCategory: '長影片',
    subCategory: 'Chairman椅人',
    thumbnail: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=1000',
    videoUrl: 'https://www.youtube.com/watch?v=YFEp6R7KAns&t=205s',
    description: 'Chairman椅人系列：紀錄片。',
    year: '2026',
    client: 'Chairman椅人'
  },
  {
    id: '26',
    title: 'ep1',
    mainCategory: '長影片',
    subCategory: 'Podcast今天來學',
    thumbnail: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80&w=1000',
    videoUrl: 'https://www.youtube.com/watch?v=-LQ2h6wB1-w',
    description: 'Podcast今天來學：ep1。',
    year: '2026',
    client: 'Podcast今天來學'
  },
  {
    id: '27',
    title: 'ep4',
    mainCategory: '長影片',
    subCategory: 'Podcast今天來學',
    thumbnail: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&q=80&w=1000',
    videoUrl: 'https://www.youtube.com/watch?v=tpNS1QODxn8&t=411s',
    description: 'Podcast今天來學：ep4。',
    year: '2026',
    client: 'Podcast今天來學'
  },
  {
    id: '28',
    title: '美食節目對決',
    mainCategory: '長影片',
    subCategory: '旅遊節目',
    thumbnail: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=1000',
    videoUrl: 'https://www.youtube.com/watch?v=HyhWj_xRXow',
    description: '旅遊節目：美食節目對決。',
    year: '2026',
    client: '旅遊頻道'
  },
  {
    id: '29',
    title: '美食走店',
    mainCategory: '長影片',
    subCategory: '旅遊節目',
    thumbnail: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=1000',
    videoUrl: 'https://www.youtube.com/watch?v=X8cD9ZnHeH8',
    description: '旅遊節目：美食走店。',
    year: '2026',
    client: '旅遊頻道'
  },
  {
    id: '30',
    title: '旅遊介紹',
    mainCategory: '長影片',
    subCategory: '阿玩旅遊',
    thumbnail: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=1000',
    videoUrl: 'https://www.youtube.com/watch?v=CsAxhwKSAVk',
    description: '阿玩旅遊：旅遊介紹。',
    year: '2026',
    client: '阿玩旅遊'
  },
  {
    id: '31',
    title: '尾牙紀錄',
    mainCategory: '長影片',
    subCategory: '阿玩旅遊',
    thumbnail: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1000',
    videoUrl: 'https://youtu.be/H88gXdR5uiM',
    description: '阿玩旅遊：尾牙紀錄。',
    year: '2026',
    client: '阿玩旅遊'
  }
];
