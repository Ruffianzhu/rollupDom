export default class Staff {
    private name: String;
    private age: Number;
    private sex: String;
    private skill: String;
    constructor(){
        this.name = '';
        this.age = 0;
        this.sex = '';
        this.skill = '';
    }
    //实用技能技能
    useSkill(){
        console.log('我的技能是：',this.skill);
    }
    //设置技能
    setSkill(skill){
        this.skill = skill;
    }
    //设置员工属性
    setStaff(config:Object){
        for(let key in config){
            this[key] = config[key];
        }
    }
}