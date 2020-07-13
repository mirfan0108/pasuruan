class ABK_Generator {
    static async GenerateFormB(position) {
        if(position && position.length > 0) {
            let formB = []
            let id_head = await position[position.findIndex(_item => _item.parent_id == 0)].id
            let counter = 0
            let id_number = []
            let id_number_ = []
            let total = 0
            let resultFormB = []
            console.log('id_head', id_head)
            await position.map(_val => {
                if(_val.type != "Fungsional") {
                    console.log('id_head => '+id_head+ "pos id =>" + _val.parent_id)
                    if(_val.parent_id == 0 ) {
                        if(_val.current_stickholder != null ) {
                            total+= parseInt(_val.current_stickholder) 
                        }
                        counter += 1
                        formB.push({
                            id: _val.id,
                            bold: true,
                            name: _val.position_name,
                            number: counter,
                            position: _val.current_position,
                            current_stickholder: _val.current_stickholder,
                            info: _val.info,
                            child: []
                        })
                        
                    } else if (_val.parent_id == id_head) {
                        console.log('sekr')
                        id_number.push(_val.id)
                        
                        if(_val.current_stickholder != null ) {
                            total+= parseInt(_val.current_stickholder) 
                        }
                        counter += 1
                        formB.push({
                            id: _val.id,
                            bold: true,
                            number: counter,
                            name: _val.position_name,
                            position: _val.current_position,
                            current_stickholder: _val.current_stickholder,
                            info: _val.info,
                            child: []
                        })
                    } 
                }
            })
            

            await position.map(_val => {
                if(_val.parent_id == id_number[id_number.findIndex(_number => _number == _val.parent_id)]) {
                    id_number_.push(_val.id)
                    
                    if(_val.current_stickholder != null ) {
                        total+= parseInt(_val.current_stickholder) 
                    }
                    formB[formB.findIndex(__item => __item.id == _val.parent_id)].child.push({
                        id: _val.id,
                        bold: true,
                        number: false,
                        name: _val.position_name,
                        position: _val.current_position,
                        current_stickholder: _val.current_stickholder,
                        info: _val.info,
                        child: []
                    })
                }
            })

            await position.map(_val => {
                if(_val.parent_id == id_number_[id_number_.findIndex(_number => _number == _val.parent_id)]) {
                    if(_val.current_stickholder != null ) {
                        total+= parseInt(_val.current_stickholder) 
                    }
                    
                    formB.map(_item => {
                        if(_item.child.length > 0) {
                            _item.child.map(_ch => {
                                if(_ch.id == _val.parent_id) {
                                    _ch.child.push({
                                        id: _val.id,
                                        bold: false,
                                        number: false,
                                        name: _val.position_name,
                                        position: _val.current_position,
                                        current_stickholder: _val.current_stickholder,
                                        info: _val.info,
                                        child: []
                                    })
                                }
                            })
                        }
                    })
                }
            })


            formB.map(_root => {
                if(_root.child.length == 0) {
                    console.log('root push')
                    resultFormB.push(_root)
                } else {
                    resultFormB.push(_root)
                    console.log('child push')
                    _root.child.map(_child => {
                        resultFormB.push(_child)
                        if(_child.child.length > 0) {
                            console.log('sub child push')
                            _child.child.map(_sub_child => {
                                resultFormB.push(_sub_child)
                            })
                        }
                    })
                }
            })
            await resultFormB.push({
                id: 0,
                bold: true,
                number: counter + 1,
                name: "Jabatan Fungsional",
                position: "",
                current_stickholder: "",
                info: "",
                child: []
            })
            await position.map(_val => {
                if(_val.type == "Fungsional") {
                    if(_val.current_stickholder != null ) {
                        total+= parseInt(_val.current_stickholder) 
                    }
                    resultFormB.push(
                        {
                            id: _val.id,
                            bold: false,
                            number: false,
                            name: _val.position_name,
                            position: _val.current_position,
                            current_stickholder: _val.current_stickholder,
                            info: _val.info,
                            child: []
                        }
                    )
                }
            })
            
            console.log(total)
            return {total: total, formB: resultFormB}
        } else {
            return {total: 0, formB: []}
        }
    }

    static async GenerateFormC(position) {
        if(position && position.length > 0) {
            let formC = []
            let id_head = await position[position.findIndex(_item => _item.parent_id == 0)].id
            let counter = 0
            let id_number = []
            let id_number_ = []
            let total = 0
            let resultFormC = []
            await position.map(_val => {
                if(_val.type != "Fungsional") {
                    if(_val.parent_id == 0 ) {
                        if(_val.oj != null ) {
                            total+= Number(_val.oj) 
                        }
                        counter += 1
                        formC.push({
                            id: _val.id,
                            bold: true,
                            name: _val.position_name,
                            number: counter,
                            load_counter: _val.oj,
                            child: []
                        })
                    } else if (_val.parent_id == id_head) {
                        console.log('sekr')
                        id_number.push(_val.id)
                        
                        if(_val.oj != null ) {
                            total+= Number(_val.oj) 
                        }
                        counter += 1
                        formC.push({
                            id: _val.id,
                            bold: true,
                            number: counter,
                            name: _val.position_name,
                            load_counter: _val.oj,
                            child: []
                        })
                    } 
                }
            })
            

            await position.map(_val => {
                if(_val.parent_id == id_number[id_number.findIndex(_number => _number == _val.parent_id)]) {
                    id_number_.push(_val.id)
                    
                    if(_val.oj != null ) {
                        total+= Number(_val.oj) 
                    }
                    formC[formC.findIndex(__item => __item.id == _val.parent_id)].child.push({
                        id: _val.id,
                        bold: true,
                        number: false,
                        name: _val.position_name,
                        load_counter: _val.oj,
                        child: []
                    })
                }
            })

            await position.map(_val => {
                if(_val.parent_id == id_number_[id_number_.findIndex(_number => _number == _val.parent_id)]) {
                    if(_val.oj != null ) {
                        total+= parseInt(_val.oj) 
                    }
                    
                    formC.map(_item => {
                        if(_item.child.length > 0) {
                            _item.child.map(_ch => {
                                if(_ch.id == _val.parent_id) {
                                    _ch.child.push({
                                        id: _val.id,
                                        bold: false,
                                        number: false,
                                        name: _val.position_name,
                                        load_counter: _val.oj,
                                        child: []
                                    })
                                }
                            })
                        }
                    })
                }
            })


            formC.map(_root => {
                if(_root.child.length == 0) {
                    console.log('root push')
                    resultFormC.push(_root)
                } else {
                    resultFormC.push(_root)
                    console.log('child push')
                    _root.child.map(_child => {
                        resultFormC.push(_child)
                        if(_child.child.length > 0) {
                            console.log('sub child push')
                            _child.child.map(_sub_child => {
                                resultFormC.push(_sub_child)
                            })
                        }
                    })
                }
            })
            await resultFormC.push({
                id: 0,
                bold: true,
                number: counter + 1,
                name: "Jabatan Fungsional",
                load_counter: "",
                child: []
            })
            await position.map(_val => {
                if(_val.type == "Fungsional") {
                    if(_val.oj != null ) {
                        total+= parseInt(_val.oj) 
                    }
                    resultFormC.push(
                        {
                            id: _val.id,
                            bold: false,
                            number: false,
                            name: _val.position_name,
                            load_counter: _val.oj,
                            child: []
                        }
                    )
                }
            })
            console.log('[total] => ', total)
            return {total: total.toFixed(2), formC: resultFormC}
        } else {
            return {total: 0, formC: []}
        }
    }

    static async GenerateFormD(position) {
        if(position && position.length > 0) {
            let formD = []
            let id_head = await position[position.findIndex(_item => _item.parent_id == 0)].id
            let counter = 0
            let id_number = []
            let id_number_ = []
            let totalOj = 0
            let totalStikholder = 0
            let totalEmpNeeded = 0
            let totalEj = 0
            let resultFormD = []
            await position.map(_val => {
                if(_val.type != "Fungsional") {
                    if(_val.parent_id == 0 ) {
                        if(_val.oj != null ) {
                            totalOj+= Number(_val.oj) 
                        }
                        if(_val.current_stickholder != null ) {
                            totalStikholder += _val.current_stickholder
                        }
                        if(_val.emp_needed != null) {
                            totalEmpNeeded += _val.emp_needed
                        }
                        if(_val.ej != null) {
                            totalEj += _val.ej
                        }
                        counter += 1
                        formD.push({
                            id: _val.id,
                            bold: true,
                            name: _val.position_name,
                            number: counter,
                            load_counter: _val.oj,
                            current_stickholder: _val.current_stickholder,
                            emp_needed: _val.emp_needed,
                            info: _val.info,
                            ej: _val.ej,
                            pj: _val.pj,
                            child: []
                        })
                        
                    } else if (_val.parent_id == id_head) {
                        console.log('sekr')
                        id_number.push(_val.id)
                        
                        if(_val.oj != null ) {
                            totalOj += Number(_val.oj) 
                        }
                        if(_val.current_stickholder != null) {
                            totalStikholder += _val.current_stickholder
                        }
                        if(_val.emp_needed != null) {
                            totalEmpNeeded += _val.emp_needed
                        }
                        if(_val.ej != null) {
                            totalEj += _val.ej
                        }
                        counter += 1
                        formD.push({
                            id: _val.id,
                            bold: true,
                            number: counter,
                            name: _val.position_name,
                            load_counter: _val.oj,
                            current_stickholder: _val.current_stickholder,
                            emp_needed: _val.emp_needed,
                            ej: _val.ej,
                            pj: _val.pj,
                            info: _val.info,
                            child: []
                        })
                    } 
                }
            })
            

            await position.map(_val => {
                if(_val.parent_id == id_number[id_number.findIndex(_number => _number == _val.parent_id)]) {
                    id_number_.push(_val.id)
                    
                    if(_val.oj != null ) {
                        totalOj += Number(_val.oj) 
                    }
                    if(_val.current_stickholder != null) {
                        totalStikholder += _val.current_stickholder
                    }
                    if(_val.emp_needed != null) {
                        totalEmpNeeded += _val.emp_needed
                    }
                    if(_val.ej != null) {
                        totalEj += _val.ej
                    }
                    formD[formD.findIndex(__item => __item.id == _val.parent_id)].child.push({
                        id: _val.id,
                        bold: true,
                        number: false,
                        name: _val.position_name,
                        load_counter: _val.oj,
                        current_stickholder: _val.current_stickholder,
                        emp_needed: _val.emp_needed,
                        ej: _val.ej,
                        pj: _val.pj,
                        info: _val.info,
                        child: []
                    })
                }
            })

            await position.map(_val => {
                if(_val.parent_id == id_number_[id_number_.findIndex(_number => _number == _val.parent_id)]) {
                    if(_val.oj != null ) {
                        totalOj += parseInt(_val.oj) 
                    }
                    if(_val.current_stickholder != null) {
                        totalStikholder += _val.current_stickholder
                    }
                    if(_val.emp_needed != null) {
                        totalEmpNeeded += _val.emp_needed
                    }
                    if(_val.ej != null) {
                        totalEj += _val.ej
                    }
                    
                    formD.map(_item => {
                        if(_item.child.length > 0) {
                            _item.child.map(_ch => {
                                if(_ch.id == _val.parent_id) {
                                    _ch.child.push({
                                        id: _val.id,
                                        bold: false,
                                        number: false,
                                        name: _val.position_name,
                                        load_counter: _val.oj,
                                        current_stickholder: _val.current_stickholder,
                                        emp_needed: _val.emp_needed,
                                        ej: _val.ej,
                                        pj: _val.pj,
                                        info: _val.info,
                                        child: []
                                    })
                                }
                            })
                        }
                    })
                }
            })


            formD.map(_root => {
                if(_root.child.length == 0) {
                    console.log('root push')
                    resultFormD.push(_root)
                } else {
                    resultFormD.push(_root)
                    _root.child.map(_child => {
                        resultFormD.push(_child)
                        if(_child.child.length > 0) {
                            _child.child.map(_sub_child => {
                                resultFormD.push(_sub_child)
                            })
                        }
                    })
                }
            })
            await resultFormD.push({
                id: 0,
                bold: true,
                number: counter + 1,
                name: "Jabatan Fungsional",
                load_counter: "",
                current_stickholder: null,
                emp_needed: null,
                ej: '',
                pj: '',
                info: '',
                child: []
            })
            await position.map(_val => {
                if(_val.type == "Fungsional") {
                    if(_val.oj != null ) {
                        totalOj += parseInt(_val.oj) 
                    }
                    if(_val.current_stickholder != null) {
                        totalStikholder += _val.current_stickholder
                    }
                    if(_val.emp_needed != null) {
                        totalEmpNeeded += _val.emp_needed
                    }
                    if(_val.ej != null) {
                        totalEj += _val.ej
                    }
                    resultFormD.push(
                        {
                            id: _val.id,
                            bold: false,
                            number: false,
                            name: _val.position_name,
                            load_counter: _val.oj,
                            current_stickholder: _val.current_stickholder,
                            emp_needed: _val.emp_needed,
                            ej: _val.ej != null ? _val.ej : (_val.oj / (_val.current_stickholder * 1250) ),
                            pj: _val.pj,
                            info: _val.info,
                            child: []
                        }
                    )
                }
            })
            totalEj = Number(totalOj) / ( parseInt(totalEmpNeeded) * 1250)
            return {
                totalOj: totalOj.toFixed(2),
                totalEj: totalEj,
                totalEmpNeeded: totalEmpNeeded,
                totalStikholder: totalStikholder, 
                formD: resultFormD
            }
        } else {
            return {
                totalOj: 0,
                totalEj: 0,
                totalEmpNeeded: 0,
                totalStikholder: 0, 
                formD: []
            }
        }
    }

    static async GenerateFormE(position) {
        if(position && position.length > 0) {
            let formD = []
            let id_head = await position[position.findIndex(_item => _item.parent_id == 0)].id
            let counter = 0
            let id_number = []
            let id_number_ = []
            let totalOj = 0
            let totalStikholder = 0
            let totalEmpNeeded = 0
            let totalEj = 0
            let resultFormD = []
            await position.map(_val => {
                if(_val.type != "Fungsional") {
                    if(_val.parent_id == 0 ) {
                        if(_val.oj != null ) {
                            totalOj+= Number(_val.oj) 
                        }
                        if(_val.current_stickholder != null ) {
                            totalStikholder += _val.current_stickholder
                        }
                        if(_val.emp_needed != null) {
                            totalEmpNeeded += _val.emp_needed
                        }
                        if(_val.ej != null) {
                            totalEj += _val.ej
                        }
                        counter += 1
                        formD.push({
                            id: _val.id,
                            bold: true,
                            name: _val.position_name,
                            number: counter,
                            load_counter: Number(_val.oj),
                            current_stickholder: _val.current_stickholder,
                            emp_needed: _val.emp_needed,
                            ej: Number(_val.ej),
                            pj: _val.pj,
                            info: _val.info,
                            child: []
                        })
                        
                    } else if (_val.parent_id == id_head) {
                        console.log('sekr')
                        id_number.push(_val.id)
                        
                        if(_val.oj != null ) {
                            totalOj += Number(_val.oj) 
                        }
                        if(_val.current_stickholder != null) {
                            totalStikholder += _val.current_stickholder
                        }
                        if(_val.emp_needed != null) {
                            totalEmpNeeded += _val.emp_needed
                        }
                        if(_val.ej != null) {
                            totalEj += _val.ej
                        }
                        counter += 1
                        formD.push({
                            id: _val.id,
                            bold: true,
                            number: counter,
                            name: _val.position_name,
                            load_counter: Number(_val.oj),
                            current_stickholder: _val.current_stickholder,
                            emp_needed: _val.emp_needed,
                            ej: Number(_val.ej),
                            pj: _val.pj,
                            info: _val.info,
                            child: []
                        })
                    } 
                }
            })
            

            await position.map(_val => {
                if(_val.parent_id == id_number[id_number.findIndex(_number => _number == _val.parent_id)]) {
                    id_number_.push(_val.id)
                    
                    if(_val.oj != null ) {
                        totalOj += Number(_val.oj) 
                    }
                    if(_val.current_stickholder != null) {
                        totalStikholder += _val.current_stickholder
                    }
                    if(_val.emp_needed != null) {
                        totalEmpNeeded += _val.emp_needed
                    }
                    if(_val.ej != null) {
                        totalEj += _val.ej
                    }
                    formD[formD.findIndex(__item => __item.id == _val.parent_id)].child.push({
                        id: _val.id,
                        bold: true,
                        number: false,
                        name: _val.position_name,
                        load_counter: Number(_val.oj),
                        current_stickholder: _val.current_stickholder,
                        emp_needed: _val.emp_needed,
                        ej: Number(_val.ej),
                        pj: _val.pj,
                        info: _val.info,
                        child: []
                    })
                }
            })

            await position.map(_val => {
                if(_val.parent_id == id_number_[id_number_.findIndex(_number => _number == _val.parent_id)]) {
                    if(_val.oj != null ) {
                        totalOj += parseInt(_val.oj) 
                    }
                    if(_val.current_stickholder != null) {
                        totalStikholder += _val.current_stickholder
                    }
                    if(_val.emp_needed != null) {
                        totalEmpNeeded += _val.emp_needed
                    }
                    if(_val.ej != null) {
                        totalEj += _val.ej
                    }
                    
                    formD.map(_item => {
                        if(_item.child.length > 0) {
                            _item.child.map(_ch => {
                                if(_ch.id == _val.parent_id) {
                                    _ch.child.push({
                                        id: _val.id,
                                        bold: false,
                                        number: false,
                                        name: _val.position_name,
                                        load_counter: Number(_val.oj),
                                        current_stickholder: _val.current_stickholder,
                                        emp_needed: _val.emp_needed,
                                        ej: Number(_val.ej),
                                        pj: _val.pj,
                                        info: _val.info,
                                        child: []
                                    })
                                }
                            })
                        }
                    })
                }
            })


            formD.map((_root, index) => {
                if(_root.child.length == 0) {
                    resultFormD.push(_root)
                } else {
                    resultFormD.push(_root)
                    _root.child.map(_child => {
                        resultFormD[index].load_counter += Number(_child.load_counter)
                        resultFormD[index].current_stickholder += parseInt(_child.current_stickholder)
                        resultFormD[index].emp_needed += parseInt(_child.emp_needed)
                        resultFormD[index].ej += Number(_child.ej)
                        if(_child.child.length > 0) {
                            _child.child.map(_sub_child => {
                                resultFormD[index].load_counter += Number(_sub_child.load_counter)
                                resultFormD[index].current_stickholder += parseInt(_sub_child.current_stickholder)
                                resultFormD[index].emp_needed += parseInt(_sub_child.emp_needed)
                                resultFormD[index].ej += Number(_sub_child.ej)
                            })
                        }
                    })
                }
            })
            await resultFormD.push({
                id: 0,
                bold: true,
                number: counter + 1,
                name: "Jabatan Fungsional",
                load_counter: 0,
                current_stickholder: 0,
                emp_needed: 0,
                ej: 0,
                pj: '',
                info: '',
                child: []
            })
            await position.map(_val => {
                if(_val.type == "Fungsional") {
                    if(_val.oj != null ) {
                        totalOj += parseInt(_val.oj) 
                    }
                    if(_val.current_stickholder != null) {
                        totalStikholder += _val.current_stickholder
                    }
                    if(_val.emp_needed != null) {
                        totalEmpNeeded += _val.emp_needed
                    }
                    if(_val.ej != null) {
                        totalEj += _val.ej
                    }
                    resultFormD[resultFormD.findIndex(_in => _in.id ==0 )].load_counter += Number(_val.oj)
                    resultFormD[resultFormD.findIndex(_in => _in.id ==0 )].current_stickholder += parseInt(_val.current_stickholder)
                    resultFormD[resultFormD.findIndex(_in => _in.id ==0 )].emp_needed += parseInt(_val.emp_needed)
                    resultFormD[resultFormD.findIndex(_in => _in.id ==0 )].ej += Number(_val.ej)
                    
                }
            })
            totalEj = Number(totalOj) / ( parseInt(totalEmpNeeded) * 1250)
            return {
                totalOj: totalOj.toFixed(2),
                totalEj: totalEj,
                totalEmpNeeded: totalEmpNeeded,
                totalStikholder: totalStikholder, 
                formE: resultFormD
            }
        } else {
            return {
                totalOj: 0,
                totalEj: 0,
                totalEmpNeeded: 0,
                totalStikholder: 0, 
                formE: []
            }
        }
    }

}

export default ABK_Generator