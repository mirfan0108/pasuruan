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
            } else if (_position.parent_id == id_head) {
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
                if(_position.parent_id == _id) {
                    structure.push({
                        id: _position.id,
                        bold: false,
                        name: _position.position_name,
                        fes: _position.fes_structure,
                        current_stickholder: _position.current_stickholder,
                        needed_stickholder: _position.formA
                    })
                }
            })
        })
        return structure
    }

    

}
export default Fes;