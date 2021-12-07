module.exports = class Services {
  static async updateList(list) {
    try {
      const arr = list;
      const item = await list[3];
      const item2 = await list[0];
      await arr.splice(0, 1, item);
      await arr.splice(3, 1, item2);

      return arr;
    } catch (error) {
      console.log(error);
    }
  }
};
