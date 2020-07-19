class Fes {
    static async generateStructure(position) {
        let structure = []
        let id_head = await position[position.findIndex(_item => _item.parent_id == 0)].id
        let id_number = []
        await position.map(_position => {
            if(_position.parent_id == 0) {
                structure.push({
                    id: _position.id,
                    bold: true,
                    name: _position.position_name,
                    fes: _position.fes_structure,
                    current_stickholder: _position.current_stickholder,
                    needed_stickholder: _position.formA
                })
                id_number.push(_position.id)
            } else if (_position.parent_id == id_head && _position.type == "Struktural") {
                structure.push({
                    id: _position.id,
                    bold: true,
                    name: _position.position_name,
                    fes: _position.fes_structure,
                    current_stickholder: _position.current_stickholder,
                    needed_stickholder: _position.formA
                })
                id_number.push(_position.id)
            }
        })
        id_number.map(_id => {
            position.map(_position => {
                if(structure.findIndex(_val => _val.id == _position.id) < 0) {
                    if(_position.parent_id == _id  && _position.type == "Struktural") {
                        structure.push({
                            id: _position.id,
                            bold: false,
                            name: _position.position_name,
                            fes: _position.fes_structure,
                            current_stickholder: _position.current_stickholder,
                            needed_stickholder: _position.formA
                        })
                    }
                }
            })
        })
        return structure
    }

    static async generateFungsional(position) {
        let structure = []
        let id_head = await position[position.findIndex(_item => _item.parent_id == 0)].id
        let id_kepsub = []
        await position.map(_position => {
            if(_position.parent_id == id_head && _position.type == "Struktural") {
                id_kepsub.push(_position.id)
            }
        })
        await id_kepsub.map(_id => {
            position.splice(position.findIndex(_val => _val.id == _id), 1)
        })
        id_kepsub.map(_id => {
            position.map(_position => {
                if(_position.parent_id == _id) {
                    if(structure.findIndex(_pos => _pos.id == _id) > -1) {
                        structure.push({
                            id: _position.id,
                            space: false,
                            name: _position.position_name,
                            bold: true,
                            organization: _position.organization,
                            fes: _position.fes_func, 
                            current_stickholder: _position.current_stickholder,
                            needed_stickholder: _position.formA
                        })
                        position.map(_child => {
                            if(_child.parent_id == _position.id) {
                                if(position.findIndex(_p => _p.parent_id == _child.id) > -1 ) {
                                    position.map(_grand_child => {
                                        if(_grand_child.parent_id == _child.id) {
                                            structure.push({
                                                id: _grand_child.id,
                                                space: false,
                                                name: _grand_child.position_name,
                                                bold: false,
                                                organization: _grand_child.organization,
                                                fes: _grand_child.fes_func, 
                                                current_stickholder: _grand_child.current_stickholder,
                                                needed_stickholder: _grand_child.formA
                                            })
                                            position.map(_last => {
                                                if(_last.parent_id == _grand_child.id) {
                                                    structure.push({
                                                        id: _grand_child.id,
                                                        space: false,
                                                        name: _grand_child.position_name,
                                                        bold: false,
                                                        organization: _grand_child.organization,
                                                        fes: _grand_child.fes_func, 
                                                        current_stickholder: _grand_child.current_stickholder,
                                                        needed_stickholder: _grand_child.formA
                                                    })
                                                }
                                            })
                                        }
                                    })
                                } else {
                                    structure.push({
                                        id: _child.id,
                                        space: false,
                                        name: _child.position_name,
                                        bold: false,
                                        organization: _child.organization,
                                        fes: _child.fes_func, 
                                        current_stickholder: _child.current_stickholder,
                                        needed_stickholder: _child.formA
                                    })
                                }
                            }
                        })
                    } else {
                        structure.push({
                            id: _id,
                            space: true,
                            name: '',
                            bold: '',
                            organization: '',
                            fes: null,
                        })
                        // structure.push({
                        //     id: _position.id,
                        //     space: false,
                        //     name: _position.position_name,
                        //     bold: true,
                        //     organization: _position.organization,
                        //     fes: _position.fes_func, 
                        //     current_stickholder: _position.current_stickholder,
                        //     needed_stickholder: _position.formA
                        // })
                        position.map(_child => {
                            if(_child.parent_id == _position.id) {
                                if(position.findIndex(_p => _p.parent_id == _child.id) > -1 ) {
                                    position.map(_grand_child => {
                                        if(_grand_child.parent_id == _child.id) {
                                            structure.push({
                                                id: _grand_child.id,
                                                space: false,
                                                name: _grand_child.position_name,
                                                bold: false,
                                                organization: _grand_child.organization,
                                                fes: _grand_child.fes_func, 
                                                current_stickholder: _grand_child.current_stickholder,
                                                needed_stickholder: _grand_child.formA
                                            })
                                            position.map(_last => {
                                                if(_last.parent_id == _grand_child.id) {
                                                    structure.push({
                                                        id: _grand_child.id,
                                                        space: false,
                                                        name: _grand_child.position_name,
                                                        bold: false,
                                                        organization: _grand_child.organization,
                                                        fes: _grand_child.fes_func, 
                                                        current_stickholder: _grand_child.current_stickholder,
                                                        needed_stickholder: _grand_child.formA
                                                    })
                                                }
                                            })
                                        }
                                    })
                                } else {
                                    structure.push({
                                        id: _child.id,
                                        space: false,
                                        name: _child.position_name,
                                        bold: false,
                                        organization: _child.organization,
                                        fes: _child.fes_func, 
                                        current_stickholder: _child.current_stickholder,
                                        needed_stickholder: _child.formA
                                    })
                                }
                            }
                        })
                    }
                }
            })
        })

        if(position.findIndex(_pos => _pos.type == "Fungsional") > -1) {
            structure.push({
                id: '_pos.id',
                bold: true,
                space: true,
                name: '',
                fes: null,
                current_stickholder: '',
                needed_stickholder: ''
            })
            position.map(_position => {
                if(_position.type == "Fungsional") {
                    structure.push({
                        id: _position.id,
                        space: false,
                        name: _position.position_name,
                        bold: true,
                        organization: _position.organization,
                        fes: _position.fes_func, 
                        current_stickholder: _position.current_stickholder,
                        needed_stickholder: _position.formA
                    })
                }
            })
        }

        return structure
    }

    

}
export default Fes;