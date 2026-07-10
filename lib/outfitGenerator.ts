import type { Outfit, Weather, Occasion, Style, Gender, AgeRange } from '@/types';

const topsMale: Record<Weather, string[]> = {
  Sunny: ['Navy Polo', 'White Linen Shirt', 'Light Blue Oxford', 'Cream Short-Sleeve Shirt', 'Striped Breton Top'],
  Rain: ['Dark Denim Jacket', 'Olive Raincoat', 'Gray Hoodie', 'Navy Sweater', 'Black Leather Jacket'],
  Cloudy: ['Charcoal Sweater', 'White Oxford', 'Burgundy Knit', 'Beige Cardigan', 'Navy Blazer'],
  Hot: ['White Linen Shirt', 'Cotton T-Shirt', 'Lightweight Polo', 'Tank Top', 'Short-Sleeve Oxford'],
  Cold: ['Cashmere Sweater', 'Wool Blazer', 'Puffer Jacket', 'Turtleneck', 'Peacoat'],
};

const topsFemale: Record<Weather, string[]> = {
  Sunny: ['White Blouse', 'Linen Camisole', 'Striped Cotton Top', 'Cream Knit Top', 'Flutter-Sleeve Blouse'],
  Rain: ['Cropped Denim Jacket', 'Trench Coat', 'Cashmere Wrap', 'Knit Sweater', 'Quilted Vest'],
  Cloudy: ['Cashmere Crewneck', 'Silk Blouse', 'Chunky Cardigan', 'Turtleneck Sweater', 'Wool Blazer'],
  Hot: ['Linen Blouse', 'Cotton Tank Top', 'Sleeveless Shell', 'Off-Shoulder Top', 'Breathable Tee'],
  Cold: ['Turtleneck Sweater', 'Wool Peacoat', 'Chunky Knit Sweater', 'Puffer Vest', 'Cashmere Wrap'],
};

const bottomsMale: Record<Weather, string[]> = {
  Sunny: ['Beige Chinos', 'Navy Shorts', 'Light Wash Jeans', 'White Trousers', 'Khaki Shorts'],
  Rain: ['Dark Jeans', 'Black Trousers', 'Navy Chinos', 'Gray Wool Pants', 'Waterproof Pants'],
  Cloudy: ['Navy Trousers', 'Gray Chinos', 'Dark Jeans', 'Olive Pants', 'Brown Corduroys'],
  Hot: ['Linen Shorts', 'Cotton Shorts', 'Light Chinos', 'White Jeans', 'Seersucker Pants'],
  Cold: ['Wool Trousers', 'Dark Jeans', 'Corduroy Pants', 'Thermal Leggings', 'Flannel-Lined Pants'],
};

const bottomsFemale: Record<Weather, string[]> = {
  Sunny: ['White Linen Skirt', 'High-Waist Shorts', 'Wide-Leg Trousers', 'Midi Skirt', 'Cropped Jeans'],
  Rain: ['Dark Skinny Jeans', 'Black Trousers', 'Pleated Midi Skirt', 'Waterproof Leggings', 'Wool Pants'],
  Cloudy: ['Straight-Leg Jeans', 'A-Line Skirt', 'Culottes', 'Tailored Trousers', 'Corduroy Skirt'],
  Hot: ['Linen Skirt', 'Denim Shorts', 'Flowy Midi Skirt', 'Wide-Leg Cropped Pants', 'Cotton Shorts'],
  Cold: ['Wool Trousers', 'Faux Leather Leggings', 'Pleated Skirt', 'Corduroy Pants', 'Thermal Tights + Skirt'],
};

const topsNeutral: Record<Weather, string[]> = {
  Sunny: ['White Linen Shirt', 'Cotton Tee', 'Lightweight Oxford', 'Cream Blouse', 'Striped Top'],
  Rain: ['Denim Jacket', 'Raincoat', 'Gray Hoodie', 'Navy Sweater', 'Black Jacket'],
  Cloudy: ['Cashmere Sweater', 'White Shirt', 'Chunky Knit', 'Cardigan', 'Navy Blazer'],
  Hot: ['Linen Shirt', 'Cotton T-Shirt', 'Tank Top', 'Short-Sleeve Oxford', 'Breathable Tee'],
  Cold: ['Heavy Sweater', 'Wool Coat', 'Puffer Jacket', 'Turtleneck', 'Fleece Jacket'],
};

const bottomsNeutral: Record<Weather, string[]> = {
  Sunny: ['Beige Chinos', 'Shorts', 'Light Jeans', 'White Pants', 'Khaki Pants'],
  Rain: ['Dark Jeans', 'Black Pants', 'Navy Chinos', 'Gray Pants', 'Waterproof Pants'],
  Cloudy: ['Navy Trousers', 'Gray Chinos', 'Dark Jeans', 'Olive Pants', 'Corduroys'],
  Hot: ['Shorts', 'Light Trousers', 'Cropped Pants', 'White Jeans', 'Linen Pants'],
  Cold: ['Wool Trousers', 'Dark Jeans', 'Corduroys', 'Warm Leggings', 'Flannel Pants'],
};

const shoes: Record<Occasion, string[]> = {
  Office: ['Brown Loafers', 'Black Oxfords', 'White Sneakers', 'Chelsea Boots', 'Derby Shoes'],
  Date: ['Tan Loafers', 'Suede Desert Boots', 'Clean White Sneakers', 'Monk Strap Shoes', 'Espadrilles'],
  Wedding: ['Black Oxfords', 'Tan Dress Shoes', 'Patent Leather Shoes', 'Suede Loafers', 'Two-Tone Brogues'],
  'Business Meeting': ['Black Cap Toe Oxfords', 'Brown Brogues', 'Tan Chelsea Boots', 'Black Loafers', 'Wholecuts'],
  Casual: ['White Sneakers', 'Canvas Slip-Ons', 'Athletic Sneakers', 'Retro Runners', 'Espadrilles'],
  Travel: ['Comfortable Sneakers', 'Slip-On Loafers', 'Walking Shoes', 'Lightweight Trainers', 'All-Weather Boots'],
};

const accessories: Record<Style, string[]> = {
  Minimal: ['Leather Watch', 'Wedding Band', 'Simple Belt'],
  Classic: ['Leather Watch', 'Silk Tie', 'Brown Belt', 'Cufflinks'],
  'Smart Casual': ['Brown Belt', 'Leather Watch', 'Leather Bracelet', 'Sunglasses'],
  Streetwear: ['Chain Necklace', 'Statement Watch', 'Beanie', 'Crossbody Bag'],
  Business: ['Silk Tie', 'Leather Watch', 'Cufflinks', 'Pocket Square', 'Belt'],
};

const explanations = [
  'Perfectly balanced for your day ahead — professional yet comfortable.',
  'We matched the colors and textures for a cohesive, polished look.',
  'This outfit adapts to changing conditions while keeping you stylish.',
  'A timeless combination that transitions seamlessly from day to night.',
  'Designed to keep you comfortable and confident from morning to evening.',
  'Smart layering lets you adjust throughout the day with ease.',
];

const ageFitModifiers: Record<AgeRange, string[]> = {
  '18-24': ['trendy', 'youthful', 'casual'],
  '25-34': ['modern', 'polished', 'versatile'],
  '35-44': ['refined', 'sophisticated', 'tailored'],
  '45-54': ['classic', 'elegant', 'timeless'],
  '55+': ['distinguished', 'comfortable', 'classic'],
};

function randomItem<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function generateOutfit(
  weather: Weather,
  occasion: Occasion,
  style: Style,
  gender: Gender,
  ageRange: AgeRange,
): Outfit {
  const tops = gender === 'Female' ? topsFemale : gender === 'Male' ? topsMale : topsNeutral;
  const bottoms = gender === 'Female' ? bottomsFemale : gender === 'Male' ? bottomsMale : bottomsNeutral;

  const top = randomItem(tops[weather]);
  const bottom = randomItem(bottoms[weather]);
  const shoe = randomItem(shoes[occasion]);
  const acc = randomItem(accessories[style]);
  const ageModifiers = ageFitModifiers[ageRange];
  const modifier = randomItem(ageModifiers);
  const explanation = `${randomItem(explanations)} ${modifier.charAt(0).toUpperCase() + modifier.slice(1)} and age-appropriate.`;

  return { top, bottom, shoes: shoe, accessories: [acc], explanation };
}

export function generateOutfits(
  weather: Weather,
  occasion: Occasion,
  style: Style,
  gender: Gender,
  ageRange: AgeRange,
  count: number = 3,
): Outfit[] {
  const results: Outfit[] = [];

  for (let i = 0; i < count; i++) {
    results.push(generateOutfit(weather, occasion, style, gender, ageRange));
  }

  return results;
}
