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
                    tags: ['kepala'],
                    html: `<div style="width: 100%; text-align: center; color: black; background-color: #68b3ff; height: 130px; border-radius: 20px; padding: 20px;"><b>${_position.position_name} <br> [ ${_position.current_stickholder} ]</b></div>`,
                })
                id_number.push(_position.id)
            }
        })
        await id_number.map(_id => {
            position.splice(position.findIndex(_val => _val.id == _id), 1)
        })
        id_number = [];
        structure.push({ id: "jft", pid: id_head, title: "Jabatan Fungsional", name: "Jabatan Fungsional", tags: ["subLevels0", "jft-group", "group"]})
        structure.push({ id: "upd", pid: id_head, title: "", name: "", tags: ["subLevels4","uptd-group", "group"] })
        let fDiv = `<table style="width: 100%; color: black;" border="1"><tr><th>Nama Jabatan</th><th>B</th><th>K</th><th>+/-</th></tr>`
        await position.map(_position => {
            if(_position.type == "Fungsional") {
                fDiv += `<tr><td style="text-align: start; width: 60%">${_position.position_name}</td><td>${_position.current_stickholder}</td><td>${this.CounterK(_position.formA)}</td><td>${this.plusMin(_position.current_stickholder, _position.formA)}</td></tr>`
                
            } else {
                if(counter == 0) {
                    counter ++
                    if(_position.parent_id == id_head) {
                        structure.push({
                            id: _position.id,
                            tags: ['kepala'],
                            pid: id_head,
                            html: `<div style="width: 100%; text-align: center; color: black; background-color: #68ff9d; height: 130px; border-radius: 20px; padding: 20px;"><b>${_position.position_name} <br> [ ${_position.current_stickholder} ]</b></div>`,
                        })
                        id_number.push(_position.id)
                    }
                }
            }
        })
        fDiv += `</table>`
        structure.push({
            id: 'pos_jft',
            stpid: "jft",
            tags: ["fg"],
            html: `<div style="width: 100%; text-align: center; color: white">${fDiv}</div>`,
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
                        tags: ['kepala'],
                        html: `<div style="width: 100%; text-align: center; color: black; background-color: #f6ff68; height: 130px; border-radius: 20px; padding: 20px;"><b>${_position.position_name} <br> [ ${_position.current_stickholder} ]</b></div>`,
                    })
                    // structure.push({ id: 'jft'+_position.id, pid: _position.id, title: "Jabatan Pelaksana", name: "Jabatan Pelaksana", tags: ["subLevels2", "jft-group", "group"]})
                    id_number.push(_position.id)
                }
            })
        })
        await id_number.map(_id => {
            position.splice(position.findIndex(_val => _val.id == _id), 1)
        })
        id_number.map(_id => {
            let findNode
            let pDiv = `<table style="width: 100%; color: black;" border="1"><tr><th>Nama Jabatan</th><th>B</th><th>K</th><th>+/-</th></tr>`
            position.map(_position => {
                if(_position.parent_id == _id) {
                    let findChild = position.findIndex(_child => _child.parent_id == _position.id) 
                    console.log('test => '+findChild)
                    if(findChild > -1) {
                        structure.push({
                            id: _position.id,
                            pid: _id,
                            tags: ['kepala'],
                            html: `<div style="width: 100%; text-align: center; color: black;  height: 130px; border-radius: 20px; padding: 20px;"><b>${_position.position_name} <br> [ ${_position.current_stickholder} ]</b></div>`
                        })
                        id_number.push(_position.id)
                    } else {
                        findNode = structure.findIndex(_child => _child.id == "jft"+_id)
                        if(findNode < 0) {
                            structure.push({ id: 'jft'+_id, pid: _id, title: "Jabatan Pelaksana", name: "Jabatan Pelaksana", tags: ["jft-group", "group"]})
                        }
                        pDiv += `<tr><td style="text-align: start; width: 60%">${_position.position_name}</td><td>${_position.current_stickholder}</td><td>${this.CounterK(_position.formA)}</td><td>${this.plusMin(_position.current_stickholder, _position.formA)}</td></tr>`
                    }
                }
            })
            pDiv += `</table>` 
            findNode = structure.findIndex(_child => _child.id == "jft"+_id)
            if(findNode > -1) {
                structure.push({
                    id: 'pos_jft_'+_id,
                    stpid: 'jft'+_id,
                    tags: ["fg"],
                    html: `<div style="width: 100%; text-align: center; color: white">${pDiv}</div>`,
                })
            }
        })

        await id_number.map(async _id => {
            position.splice(position.findIndex(_val => _val.id == _id), 1)
            if(_id != id_head) {
                await position.map(_val => {
                    if(_val.parent_id == _id) {
                        position.splice(position.findIndex(del => del.id == _val.id), 1)
                    }
                })
                
            }
        })

        id_number = []
        position.map(_position => {
            if(_position.parent_id == id_head && _position.type == "Struktural") {
                structure.push({
                    id: _position.id,
                    tags: ['kepala'],
                    stpid: "upd",
                    pid: id_head,
                    html: `<div style="width: 100%; text-align: center; color: black; background-color: #68ff9d; height: 130px; border-radius: 20px; padding: 20px;"><b>${_position.position_name} <br> [ ${_position.current_stickholder} ]</b></div>`,
                })
                id_number.push(_position.id)
            }
        })
        

        // level 3 
        id_number.map(_id => {
            position.map(_position => {
                if(_position.parent_id == _id) {
                    structure.push({
                        id: _position.id,
                        pid: _id,
                        tags: ['kepala'],
                        html: `<div style="width: 100%; text-align: center; color: black; background-color: #f6ff68; height: 130px; border-radius: 20px; padding: 20px;"><b>${_position.position_name} <br> [ ${_position.current_stickholder} ]</b></div>`,
                    })
                    // structure.push({ id: 'jft'+_position.id, pid: _position.id, title: "Jabatan Pelaksana", name: "Jabatan Pelaksana", tags: ["subLevels2", "jft-group", "group"]})
                    id_number.push(_position.id)
                }
            })
        })
        await id_number.map(_id => {
            position.splice(position.findIndex(_val => _val.id == _id), 1)
        })
        id_number.map(_id => {
            let findNode
            let pDiv = `<table style="width: 100%; color: black;" border="1"><tr><th>Nama Jabatan</th><th>B</th><th>K</th><th>+/-</th></tr>`
            position.map(_position => {
                if(_position.parent_id == _id) {
                    let findChild = position.findIndex(_child => _child.parent_id == _position.id) 
                    console.log('test => '+findChild)
                    if(findChild > -1) {
                        structure.push({
                            id: _position.id,
                            pid: _id,
                            tags: ['kepala'],
                            html: `<div style="width: 100%; text-align: center; color: black;  height: 130px; border-radius: 20px; padding: 20px;"><b>${_position.position_name} <br> [ ${_position.current_stickholder} ]</b></div>`
                        })
                        id_number.push(_position.id)
                    } else {
                        findNode = structure.findIndex(_child => _child.id == "jft"+_id)
                        if(findNode < 0) {
                            structure.push({ id: 'jft'+_id, pid: _id, title: "Jabatan Pelaksana", name: "Jabatan Pelaksana", tags: ["jft-group", "group"]})
                        }
                        pDiv += `<tr><td style="text-align: start; width: 60%">${_position.position_name}</td><td>${_position.current_stickholder}</td><td>${this.CounterK(_position.formA)}</td><td>${this.plusMin(_position.current_stickholder, _position.formA)}</td></tr>`
                    }
                }
            })
            pDiv += `</table>` 
            findNode = structure.findIndex(_child => _child.id == "jft"+_id)
            if(findNode > -1) {
                structure.push({
                    id: 'pos_jft_'+_id,
                    stpid: 'jft'+_id,
                    tags: ["fg"],
                    html: `<div style="width: 100%; text-align: center; color: white">${pDiv}</div>`,
                })
            }
        })

        return structure
    }

    static CounterK(data) {
        let total = 0
                
        data.map(_val => {
            total += parseFloat(_val.ket)
        })
        console.log('ini total ',total)
        return this.formatNumber(Math.round(total/1250))
    }

    static formatNumber(angka, prefix = "", Sparators = "."){
        let string_number = angka.toString()
        var number_string = string_number.replace(/[^,\d]/g, '').toString(),
        split   		= number_string.split(','),
        sisa     		= split[0].length % 3,
        rupiah     		= split[0].substr(0, sisa),
        ribuan     		= split[0].substr(sisa).match(/\d{3}/gi);
        if(ribuan){
            let separator = sisa ? Sparators : '';
            rupiah += separator + ribuan.join('.');
        }
        rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah;
        return prefix == undefined ? rupiah : (rupiah ? '' + rupiah : '');

    }

    static plusMin(b, k) {
        let total = 0
                
        k.map(_val => {
            total += parseFloat(_val.ket)
        })

        let result = b - (Math.round(total/1250)) 
        return result
    }

    

}
export default PetaJabatan;