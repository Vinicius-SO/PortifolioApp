export function importAll(r:any) {
  let images:any = {};
  r.keys().map((item:any, index:any) => { images[item.replace('./', '')] = r(item); });
  return images;
}