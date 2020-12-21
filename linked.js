// find all the users that have not been linked
const getUnlinked = (allUsers, linked)=>{
    let linkedKeys = {};
    for(let i = 0; i < linked.length; i++){
        linkedKeys[`${linked[i].id}`] = true;
    }
    return allUsers.filter((item)=> !linkedKeys[`${item.id}`]);

}

module.exports =  getUnlinked;