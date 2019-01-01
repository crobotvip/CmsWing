/**
 * Created by luopeng on 2018/12/20.
 */
module.exports = class extends think.cmswing.rest {
    /**
     * 获取分类信息
     * /api/category 获取全部栏目（树结构）
     * /api/category/1 获取栏目id为1的栏目信息
     * @returns {Promise.<*>}
     */
    async getAction() {
        let data;
        const model = this.model('cmswing/channel');
        data = await model.get_channel();
        return this.success(data);
    }
    async postAction() {
        return this.success(this.post());
    }
};