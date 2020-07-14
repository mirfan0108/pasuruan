class PetaJabatan {
    static async generateStructure(position) {
        let structure = []
        let id_head = await position[position.findIndex(_item => _item.parent_id == 0 && _item.type == "Struktural")].id
        console.log('d', position[position.findIndex(_item => _item.parent_id == 0)])
        let id_number = []
        let counter = 0
        await position.map(_position => {
            if(_position.id == id_head) {
                structure.push({
                    id: _position.id,
                    html: `<div style="width: 100%; text-align: center; color: white"><b>${_position.position_name}</b><br><b>Buzzeting (${_position.current_stickholder})</b></div>`,
                })
                id_number.push(_position.id)
            }
        })
        await id_number.map(_id => {
            position.splice(position.findIndex(_val => _val.id == _id), 1)
        })
        id_number = [];
        structure.push({ id: "jft", pid: id_head, title: "Jabatan Fungsional", name: "Jabatan Fungsional", tags: ["subLevels2", "jft-group", "group"]})
        structure.push({ id: "upd", pid: id_head, title: "", name: "", tags: ["subLevels4","uptd-group", "group"] })
        await position.map(_position => {
            if(_position.type == "Fungsional") {
                structure.push({
                    id: _position.id,
                    stpid: "jft",
                    html: `<div style="width: 100%; text-align: center; color: white"><b>${_position.position_name}</b><br><b>Buzzeting (${_position.current_stickholder})</b></div>`,
                })
            } else {
                if(counter == 0) {
                    counter ++
                    if(_position.parent_id == id_head) {
                        structure.push({
                            id: _position.id,
                            pid: id_head,
                            html: `<div style="width: 100%; text-align: center; color: white"><b>${_position.position_name}</b><br><b>Buzzeting (${_position.current_stickholder})</b></div>`,
                        })
                        id_number.push(_position.id)
                    }
                }
            }
        })
        
        await id_number.map(_id => {
            position.splice(position.findIndex(_val => _val.id == _id), 1)
        })
        await position.splice(position.findIndex(_val => _val.type == "Fungsional"), 1)

        id_number.map(_id => {
            position.map(_position => {
                if(_position.parent_id == _id) {
                    structure.push({
                        id: _position.id,
                        pid: _id,
                        tags: ["subLevels0"],
                        html: `<div style="width: 100%; text-align: center; color: white"><b>${_position.position_name}</b><br><b>Buzzeting (${_position.current_stickholder})</b></div>`,
                    })
                    structure.push({ id: 'jft'+_position.id, pid: _position.id, title: "Jabatan Pelaksana", name: "Jabatan Pelaksana", tags: ["subLevels2", "jft-group", "group"]})
                    id_number.push(_position.id)
                }
            })
        })
        await id_number.map(_id => {
            position.splice(position.findIndex(_val => _val.id == _id), 1)
        })
        id_number.map(_id => {
            position.map(_position => {
                if(_position.parent_id == _id) {
                    structure.push({
                        id: _position.id,
                        stpid: 'jft'+_position.parent_id,
                        html: `<div style="width: 100%; text-align: center; color: white"><b>${_position.position_name}</b><br><b>Buzzeting (${_position.current_stickholder})</b></div>`,
                    })
                }
            })
        })
        

        // level 3 
        
        
        return structure
    }

    

}
export default PetaJabatan;