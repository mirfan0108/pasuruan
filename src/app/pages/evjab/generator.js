class Fes {

    static async generateStructure(position) {
        let Lampiran = []
        let id_head = await position[position.findIndex(_item => _item.parent_id == 0)].id
        let counter = 0
        let id_number = []
        let id_number_ = []
        let total = 0
        let resultLampiran = []
        await position.map(_val => {
            if(_val.type == "Struktural") {
                if(_val.parent_id == 0 ) {
                    if(_val.oj != null ) {
                        total+= Number(_val.oj) 
                    }
                    counter += 1
                    Lampiran.push({
                        id: _val.id,
                        bold: true,
                        name: _val.position_name,
                        fes: _val.fes_structure,
                        current_stickholder: _val.current_stickholder,
                        needed_stickholder: _val.formA,
                        child: []
                    })
                } else if (_val.parent_id == id_head) {
                    console.log('sekr')
                    id_number.push(_val.id)
                    
                    if(_val.oj != null ) {
                        total+= Number(_val.oj) 
                    }
                    counter += 1
                    Lampiran.push({
                        id: _val.id,
                        bold: true,
                        name: _val.position_name,
                        fes: _val.fes_structure,
                        current_stickholder: _val.current_stickholder,
                        needed_stickholder: _val.formA,
                        child: []
                    })
                } 
            }
        })
        

        await position.map(_val => {
            if(_val.parent_id == id_number[id_number.findIndex(_number => _number == _val.parent_id)] && _val.type == "Struktural") {
                id_number_.push(_val.id)
                Lampiran[Lampiran.findIndex(__item => __item.id == _val.parent_id)].child.push({
                    id: _val.id,
                    bold: true,
                    name: _val.position_name,
                    fes: _val.fes_structure,
                    current_stickholder: _val.current_stickholder,
                    needed_stickholder: _val.formA,
                    child: []
                })
            }
        })

        await position.map(_val => {
            if(_val.parent_id == id_number_[id_number_.findIndex(_number => _number == _val.parent_id)] && _val.type == "Struktural") {
                if(_val.oj != null ) {
                    total+= parseInt(_val.oj) 
                }
                
                Lampiran.map(_item => {
                    if(_item.child.length > 0) {
                        _item.child.map(_ch => {
                            if(_ch.id == _val.parent_id) {
                                _ch.child.push({
                                    id: _val.id,
                                    bold: false,
                                    name: _val.position_name,
                                    fes: _val.fes_structure,
                                    current_stickholder: _val.current_stickholder,
                                    needed_stickholder: _val.formA,
                                    child: []
                                })
                            }
                        })
                    }
                })
            }
        })


        Lampiran.map(_root => {
            if(_root.child.length == 0) {
                resultLampiran.push(_root)
            } else {
                resultLampiran.push(_root)
                console.log('child push')
                _root.child.map(_child => {
                    resultLampiran.push(_child)
                    if(_child.child.length > 0) {
                        console.log('sub child push')
                        _child.child.map(_sub_child => {
                            resultLampiran.push(_sub_child)
                        })
                    }
                })
            }
        }) 
        return resultLampiran
    }

    static async generateStructure2(position) {
        let Lampiran = []
            let id_head = await position[position.findIndex(_item => _item.parent_id == 0)].id
            let counter = 0
            let id_number = []
            let id_number_ = []
            let total = 0
            let resultLampiran = []
            await position.map(_val => {
                if(_val.type == "Struktural") {
                    if(_val.parent_id == 0 ) {
                        if(_val.oj != null ) {
                            total+= Number(_val.oj) 
                        }
                        counter += 1
                        Lampiran.push({
                            id: _val.id,
                            bold: true,
                            name: _val.position_name,
                            fes: _val.fes_struktur,
                            current_stickholder: _val.current_stickholder,
                            needed_stickholder: _val.formA,
                            child: []
                        })
                    } else if (_val.parent_id == id_head) {
                        console.log('sekr')
                        id_number.push(_val.id)
                        
                        if(_val.oj != null ) {
                            total+= Number(_val.oj) 
                        }
                        counter += 1
                        Lampiran.push({
                            id: _val.id,
                            bold: true,
                            name: _val.position_name,
                            fes: _val.fes_struktur,
                            current_stickholder: _val.current_stickholder,
                            needed_stickholder: _val.formA,
                            child: []
                        })
                    } 
                }
            })
            

            await position.map(_val => {
                if(_val.parent_id == id_number[id_number.findIndex(_number => _number == _val.parent_id)] && _val.type == "Struktural") {
                    id_number_.push(_val.id)
                    Lampiran[Lampiran.findIndex(__item => __item.id == _val.parent_id)].child.push({
                        id: _val.id,
                        bold: true,
                        name: _val.position_name,
                        fes: _val.fes_struktur,
                        current_stickholder: _val.current_stickholder,
                        needed_stickholder: _val.formA,
                        child: []
                    })
                }
            })

            await position.map(_val => {
                if(_val.parent_id == id_number_[id_number_.findIndex(_number => _number == _val.parent_id)] && _val.type == "Struktural") {
                    if(_val.oj != null ) {
                        total+= parseInt(_val.oj) 
                    }
                    
                    Lampiran.map(_item => {
                        if(_item.child.length > 0) {
                            _item.child.map(_ch => {
                                if(_ch.id == _val.parent_id) {
                                    _ch.child.push({
                                        id: _val.id,
                                        bold: false,
                                        name: _val.position_name,
                                        fes: _val.fes_struktur,
                                        current_stickholder: _val.current_stickholder,
                                        needed_stickholder: _val.formA,
                                        child: []
                                    })
                                }
                            })
                        }
                    })
                }
            })


            Lampiran.map(_root => {
                if(_root.child.length == 0) {
                    console.log('root push')
                    resultLampiran.push(_root)
                } else {
                    resultLampiran.push(_root)
                    console.log('child push')
                    _root.child.map(_child => {
                        resultLampiran.push(_child)
                        if(_child.child.length > 0) {
                            console.log('sub child push')
                            _child.child.map(_sub_child => {
                                resultLampiran.push(_sub_child)
                            })
                        }
                    })
                }
            }) 
        return resultLampiran
    }


    static async generateFungsional(position) {
        
        let Lampiran = []
        let id_head = await position[position.findIndex(_item => _item.parent_id == 0)].id
        let id_number = []
        let id_number_ = []
        let counter = 0
        let resultLampiran = []
        await position.map(_val => {
            if(_val.type != "Fungsional") {
                if(_val.parent_id == 0 ) {
                    counter += 1
                    Lampiran.push({
                        id: _val.id,
                        bold: true,
                        space: false,
                        number: counter,
                        name: _val.position_name,
                        organization: _val.organization,
                        fes: _val.fes_func, 
                        current_stickholder: _val.current_stickholder,
                        needed_stickholder: _val.formA,
                        child: []
                    })
                } else if (_val.parent_id == id_head) {
                    console.log('sekr')
                    id_number.push(_val.id)
                    
                    counter += 1
                    Lampiran.push({
                        id: _val.id,
                        bold: true,
                        space: false,
                        name: _val.position_name,
                        load_counter: _val.oj,
                        organization: _val.organization,
                        fes: _val.fes_func, 
                        current_stickholder: _val.current_stickholder,
                        needed_stickholder: _val.formA,
                        child: []
                    })
                } 
            }
        })
        

        await position.map(_val => {
            if(_val.parent_id == id_number[id_number.findIndex(_number => _number == _val.parent_id)]) {
                id_number_.push(_val.id)
                
                Lampiran[Lampiran.findIndex(__item => __item.id == _val.parent_id)].child.push({
                    id: _val.id,
                    bold: true,
                    number: false,
                    space: false,
                    name: _val.position_name,
                    organization: _val.organization,
                    fes: _val.fes_func, 
                    current_stickholder: _val.current_stickholder,
                    needed_stickholder: _val.formA,
                    child: []
                })
            }
        })

        await position.map(_val => {
            if(_val.parent_id == id_number_[id_number_.findIndex(_number => _number == _val.parent_id)]) {
                
                Lampiran.map(_item => {
                    if(_item.child.length > 0) {
                        _item.child.map(_ch => {
                            if(_ch.id == _val.parent_id) {
                                _ch.child.push({
                                    id: _val.id,
                                    bold: false,
                                    space: false,
                                    number: false,
                                    name: _val.position_name,
                                    organization: _val.organization,
                                    fes: _val.fes_func, 
                                    current_stickholder: _val.current_stickholder,
                                    needed_stickholder: _val.formA,
                                    child: []
                                })
                            }
                        })
                    }
                })
            }
        })


        Lampiran.map(_root => {
            if(_root.child.length != 0) {
                resultLampiran.push({
                    id: 0,
                    bold: false,
                    space: true,
                    number: false,
                    name: '',
                    organization: '',
                    fes: '', 
                    current_stickholder: '',
                    needed_stickholder: '',
                    child: []
                })
                _root.child.map(_child => {
                    if(_child.child.length > 0) {
                        
                        _child.child.map(_sub_child => {
                            resultLampiran.push({
                                id: _sub_child.id,
                                bold: false,
                                space: false,
                                number: false,
                                name: _sub_child.name,
                                organization: _sub_child.organization,
                                fes: _sub_child.fes, 
                                current_stickholder: _sub_child.current_stickholder,
                                needed_stickholder: _sub_child.needed_stickholder,
                                child: []
                            })
                        })
                    }
                })

            } 
        })
        await resultLampiran.push({
            id: 0,
            bold: false,
            space: true,
            number: false,
            name: '',
            organization: '',
            fes: '', 
            current_stickholder: '',
            needed_stickholder: '',
            child: []
        })
        await position.map(_val => {
            if(_val.type == "Fungsional") {
                resultLampiran.push(
                    {
                        id: _val.id,
                        bold: false,
                        number: false,
                        name: _val.position_name,
                        id: _val.id,
                        bold: false,
                        space: false,
                        number: false,
                        name: _val.position_name,
                        organization: _val.organization,
                        fes: _val.fes_func, 
                        current_stickholder: _val.current_stickholder,
                        needed_stickholder: _val.formA,
                        child: []
                    }
                )
            }
        })
        return resultLampiran
    }

    static async generateInfoStructure(position) {
        if(position && position.length > 0) {
            let Lampiran = []
            let id_head = await position[position.findIndex(_item => _item.parent_id == 0)].id
            let counter = 0
            let id_number = []
            let id_number_ = []
            let total = 0
            let resultLampiran = []
            await position.map(_val => {
                if(_val.type == "Struktural") {
                    if(_val.parent_id == 0 ) {
                        if(_val.oj != null ) {
                            total+= Number(_val.oj) 
                        }
                        counter += 1
                        Lampiran.push({
                            id: _val.id,
                            bold: true,
                            name: _val.position_name,
                            info_faktor: _val.info_faktor,
                            child: []
                        })
                    } else if (_val.parent_id == id_head) {
                        console.log('sekr')
                        id_number.push(_val.id)
                        
                        if(_val.oj != null ) {
                            total+= Number(_val.oj) 
                        }
                        counter += 1
                        Lampiran.push({
                            id: _val.id,
                            bold: true,
                            name: _val.position_name,
                            info_faktor: _val.info_faktor,
                            child: []
                        })
                    } 
                }
            })
            

            await position.map(_val => {
                if(_val.parent_id == id_number[id_number.findIndex(_number => _number == _val.parent_id)] && _val.type == "Struktural") {
                    id_number_.push(_val.id)
                    Lampiran[Lampiran.findIndex(__item => __item.id == _val.parent_id)].child.push({
                        id: _val.id,
                        bold: true,
                        name: _val.position_name,
                        info_faktor: _val.info_faktor,
                        child: []
                    })
                }
            })

            await position.map(_val => {
                if(_val.parent_id == id_number_[id_number_.findIndex(_number => _number == _val.parent_id)] && _val.type == "Struktural") {
                    if(_val.oj != null ) {
                        total+= parseInt(_val.oj) 
                    }
                    
                    Lampiran.map(_item => {
                        if(_item.child.length > 0) {
                            _item.child.map(_ch => {
                                if(_ch.id == _val.parent_id) {
                                    _ch.child.push({
                                        id: _val.id,
                                        bold: false,
                                        name: _val.position_name,
                                        info_faktor: _val.info_faktor,
                                        child: []
                                    })
                                }
                            })
                        }
                    })
                }
            })


            Lampiran.map(_root => {
                if(_root.child.length == 0) {
                    console.log('root push')
                    resultLampiran.push(_root)
                } else {
                    resultLampiran.push(_root)
                    console.log('child push')
                    _root.child.map(_child => {
                        resultLampiran.push(_child)
                        if(_child.child.length > 0) {
                            console.log('sub child push')
                            _child.child.map(_sub_child => {
                                resultLampiran.push(_sub_child)
                            })
                        }
                    })
                }
            })
            return resultLampiran
        } else {
            return []
        }
    }

    static async generateInfoFungsional(position) {
        if(position && position.length > 0) {
            let Lampiran = []
            let id_head = await position[position.findIndex(_item => _item.parent_id == 0)].id
            let counter = 0
            let id_number = []
            let id_number_ = []
            let total = 0
            let resultLampiran = []
            await position.map(_val => {
                if(_val.type != "Struktural") {
                    if(_val.parent_id == 0 ) {
                        if(_val.oj != null ) {
                            total+= Number(_val.oj) 
                        }
                        counter += 1
                        Lampiran.push({
                            id: _val.id,
                            bold: true,
                            name: _val.position_name,
                            info_faktor: _val.info_faktor,
                            child: []
                        })
                    } else if (_val.parent_id == id_head) {
                        console.log('sekr')
                        id_number.push(_val.id)
                        
                        if(_val.oj != null ) {
                            total+= Number(_val.oj) 
                        }
                        counter += 1
                        Lampiran.push({
                            id: _val.id,
                            bold: true,
                            name: _val.position_name,
                            info_faktor: _val.info_faktor,
                            child: []
                        })
                    } 
                }
            })
            

            await position.map(_val => {
                if(_val.parent_id == id_number[id_number.findIndex(_number => _number == _val.parent_id)] && _val.type != "Struktural") {
                    id_number_.push(_val.id)
                    Lampiran[Lampiran.findIndex(__item => __item.id == _val.parent_id)].child.push({
                        id: _val.id,
                        bold: true,
                        name: _val.position_name,
                        info_faktor: _val.info_faktor,
                        child: []
                    })
                }
            })

            await position.map(_val => {
                if(_val.parent_id == id_number_[id_number_.findIndex(_number => _number == _val.parent_id)] && _val.type != "Struktural") {
                    if(_val.oj != null ) {
                        total+= parseInt(_val.oj) 
                    }
                    
                    Lampiran.map(_item => {
                        if(_item.child.length > 0) {
                            _item.child.map(_ch => {
                                if(_ch.id == _val.parent_id) {
                                    _ch.child.push({
                                        id: _val.id,
                                        bold: false,
                                        name: _val.position_name,
                                        info_faktor: _val.info_faktor,
                                        child: []
                                    })
                                }
                            })
                        }
                    })
                }
            })


            Lampiran.map(_root => {
                if(_root.child.length == 0) {
                    console.log('root push')
                    resultLampiran.push(_root)
                } else {
                    resultLampiran.push(_root)
                    console.log('child push')
                    _root.child.map(_child => {
                        resultLampiran.push(_child)
                        if(_child.child.length > 0) {
                            console.log('sub child push')
                            _child.child.map(_sub_child => {
                                resultLampiran.push(_sub_child)
                            })
                        }
                    })
                }
            })
            return resultLampiran
        } else {
            return []
        }
    }

    static async GenerateLampiranKepInd(position) {
        if(position && position.length > 0) {
            let Lampiran = []
            let id_head = await position[position.findIndex(_item => _item.parent_id == 0)].id
            let counter = 0
            let id_number = []
            let id_number_ = []
            let total = 0
            let resultLampiran = []
            await position.map(_val => {
                if(_val.type != "Fungsional") {
                    if(_val.parent_id == 0 ) {
                        console.log('head  =>', _val)
                        if(_val.oj != null ) {
                            total+= Number(_val.oj) 
                        }
                        counter += 1
                        Lampiran.push({
                            id: _val.id,
                            bold: true,
                            name: _val.position_name,
                            organization: _val.organization,
                            penjabat: _val.penjabat,
                            jc: _val.type == "Struktural" ? 
                            _val.fes_struktur ? this.jobClass(this.jobValue(_val.fes_struktur.f1, _val.fes_struktur.f2, _val.fes_struktur.f3, _val.fes_struktur.f4_1, _val.fes_struktur.f4_2, _val.fes_struktur.f5, _val.fes_struktur.f6,)) : 0 : 
                            _val.fes_func ? this.jobClass(this.jobValueF(_val.fes_func.f1, _val.fes_func.f2, _val.fes_func.f3,_val.fes_func.f4,_val.fes_func.f5,_val.fes_func.f6,_val.fes_func.f7,_val.fes_func.f8,_val.fes_func.f9 )) : 0,
                            child: []
                        })
                    } else if (_val.parent_id == id_head) {
                        console.log('sekr')
                        id_number.push(_val.id)
                        
                        if(_val.oj != null ) {
                            total+= Number(_val.oj) 
                        }
                        counter += 1
                        Lampiran.push({
                            id: _val.id,
                            bold: true,
                            name: _val.position_name,
                            organization: _val.organization,
                            penjabat: _val.penjabat,
                            jc: _val.type == "Struktural" ? 
                            _val.fes_struktur ? this.jobClass(this.jobValue(_val.fes_struktur.f1, _val.fes_struktur.f2, _val.fes_struktur.f3, _val.fes_struktur.f4_1, _val.fes_struktur.f4_2, _val.fes_struktur.f5, _val.fes_struktur.f6,)) : 0 
                            : _val.fes_func ? this.jobClass(this.jobValueF(_val.fes_func.f1, _val.fes_func.f2, _val.fes_func.f3,_val.fes_func.f4,_val.fes_func.f5,_val.fes_func.f6,_val.fes_func.f7,_val.fes_func.f8,_val.fes_func.f9 )) : 0,
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
                    Lampiran[Lampiran.findIndex(__item => __item.id == _val.parent_id)].child.push({
                        id: _val.id,
                        bold: true,
                        name: _val.position_name,
                        organization: _val.organization,
                        penjabat: _val.penjabat,
                        jc: _val.type == "Struktural" ? 
                            _val.fes_struktur ? this.jobClass(this.jobValue(_val.fes_struktur.f1, _val.fes_struktur.f2, _val.fes_struktur.f3, _val.fes_struktur.f4_1, _val.fes_struktur.f4_2, _val.fes_struktur.f5, _val.fes_struktur.f6,)) : 0 : 
                            _val.fes_func ? this.jobClass(this.jobValueF(_val.fes_func.f1, _val.fes_func.f2, _val.fes_func.f3,_val.fes_func.f4,_val.fes_func.f5,_val.fes_func.f6,_val.fes_func.f7,_val.fes_func.f8,_val.fes_func.f9 )) : 0,
                        child: []
                    })
                }
            })

            await position.map(_val => {
                if(_val.parent_id == id_number_[id_number_.findIndex(_number => _number == _val.parent_id)]) {
                    if(_val.oj != null ) {
                        total+= parseInt(_val.oj) 
                    }
                    
                    Lampiran.map(_item => {
                        if(_item.child.length > 0) {
                            _item.child.map(_ch => {
                                if(_ch.id == _val.parent_id) {
                                    _ch.child.push({
                                        id: _val.id,
                                        bold: false,
                                        name: _val.position_name,
                                        organization: _val.organization,
                                        penjabat: _val.penjabat,
                                        jc: _val.type == "Struktural" ? 
                                        _val.fes_struktur ? this.jobClass(this.jobValue(_val.fes_struktur.f1, _val.fes_struktur.f2, _val.fes_struktur.f3, _val.fes_struktur.f4_1, _val.fes_struktur.f4_2, _val.fes_struktur.f5, _val.fes_struktur.f6,)) : 0 : 
                                        _val.fes_func ? this.jobClass(this.jobValueF(_val.fes_func.f1, _val.fes_func.f2, _val.fes_func.f3,_val.fes_func.f4,_val.fes_func.f5,_val.fes_func.f6,_val.fes_func.f7,_val.fes_func.f8,_val.fes_func.f9 )) : 0,
                                        child: []
                                    })
                                }
                            })
                        }
                    })
                }
            })


            Lampiran.map(_root => {
                if(_root.child.length == 0) {
                    console.log('root push')
                    resultLampiran.push(_root)
                } else {
                    resultLampiran.push(_root)
                    _root.child.map(_child => {
                        resultLampiran.push(_child)
                        if(_child.child.length > 0) {
                            console.log('sub child push')
                            _child.child.map(_sub_child => {
                                resultLampiran.push(_sub_child)
                            })
                        }
                    })
                }
            })
            await resultLampiran.push({
                id: 0,
                bold: true,
                name: "Jabatan Fungsional Tertentu",
                jc: null,
                child: []
            })
            await position.map(_val => {
                if(_val.type == "Fungsional") {
                    if(_val.oj != null ) {
                        total+= parseInt(_val.oj) 
                    }
                    resultLampiran.push(
                        {
                            id: _val.id,
                            bold: false,
                            name: _val.position_name,
                            organization: _val.organization,
                            penjabat: _val.penjabat,
                            jc: _val.type == "Struktural" ? 
                            _val.fes_struktur ? this.jobClass(this.jobValue(_val.fes_struktur.f1, _val.fes_struktur.f2, _val.fes_struktur.f3, _val.fes_struktur.f4_1, _val.fes_struktur.f4_2, _val.fes_struktur.f5, _val.fes_struktur.f6,)) : 0 : 
                            _val.fes_func ? this.jobClass(this.jobValueF(_val.fes_func.f1, _val.fes_func.f2, _val.fes_func.f3,_val.fes_func.f4,_val.fes_func.f5,_val.fes_func.f6,_val.fes_func.f7,_val.fes_func.f8,_val.fes_func.f9 )) : 0,
                            child: []
                        }
                    )
                }
            })
            return resultLampiran
        } else {
            return []
        }
    }

    static async GenerateLamp1(position) {
        let result = [
            { class: '0', total: 0},
            { class: '17', total: 0},
            { class: '16', total: 0},
            { class: '15', total: 0},
            { class: '14', total: 0},
            { class: '13', total: 0},
            { class: '12', total: 0},
            { class: '11', total: 0},
            { class: '10', total: 0},
            { class: '9', total: 0},
            { class: '8', total: 0},
            { class: '7', total: 0},
            { class: '6', total: 0},
            { class: '5', total: 0},
            { class: '4', total: 0},
            { class: '3', total: 0},
            { class: '2', total: 0},
            { class: '1', total: 0},
        ]
        await position.map(_val => {
            let jc = _val.type == "Struktural" ? 
            _val.fes_struktur ? this.jobClass(this.jobValue(_val.fes_struktur.f1, _val.fes_struktur.f2, _val.fes_struktur.f3, _val.fes_struktur.f4_1, _val.fes_struktur.f4_2, _val.fes_struktur.f5, _val.fes_struktur.f6,)) : 0 : 
            _val.fes_func ? this.jobClass(this.jobValueF(_val.fes_func.f1, _val.fes_func.f2, _val.fes_func.f3,_val.fes_func.f4,_val.fes_func.f5,_val.fes_func.f6,_val.fes_func.f7,_val.fes_func.f8,_val.fes_func.f9 )) : 0
            console.log(`jc => ${jc} = `,_val.penjabat.length)
            result.map(_cl => {
                if(_cl.class == jc) {
                    _cl.total += _val.penjabat.length
                }
            })
        })
        return result
    }

    static counterF1(number) {
        if(number == 1) {
            return 175
        } else if (number == 2) {
            return 350
        } else if (number == 3) {
            return 550
        } else if (number == 4) {
            return 775
        } else if (number == 5) {
            return 900
        } else {
            return "-"
        }
    }
    static counterF2(number) {
        if(number == 1) {
            return 100
        } else if (number == 2) {
            return 250
        } else if (number == 3) {
            return 350
        } else {
            return "-"
        }
    } 
    static counterF3(number) {
        if(number == 1) {
            return 450
        } else if (number == 2) {
            return 775
        } else if (number == 3) {
            return 900
        } else {
            return "-"
        }
    }
    static counterF41(number) {
        if(number == 1) {
            return 25
        } else if (number == 2) {
            return 50
        } else if (number == 3) {
            return 75
        } else if (number == 4) {
            return 100
        } else {
            return "-"
        }
    }
    static counterF42(number) {
        if(number == 1) {
            return 30
        } else if (number == 2) {
            return 75
        } else if (number == 3) {
            return 100
        } else if (number == 4) {
            return 125
        } else {
            return "-"
        }
    }
    static counterF5(number) {
        if(number == 1) {
            return 75
        } else if (number == 2) {
            return 205
        } else if (number == 3) {
            return 340
        } else if (number == 4) {
            return 505
        } else if (number == 5) {
            return 650
        } else if (number == 6) {
            return 800
        } else if (number == 7) {
            return 930
        } else if (number == 8) {
            return 1030
        } else {
            return "-"
        }
    }
    static counterF6(number) {
        if(number == 1) {
            return 310
        } else if (number == 2) {
            return 575
        } else if (number == 3) {
            return 975
        } else if (number == 4) {
            return 1120
        } else if (number == 5) {
            return 1225
        } else if (number == 6) {
            return 1325
        } else {
            return "-"
        }
    }

    static jobValueF(f1, f2, f3, f4, f5, f6, f7, f8, f9){
        let total = 0
        total += f1 != 0 ? this.fcounterF1(f1) : 0
        total += f2 != 0 ? this.fcounterF2(f2) : 0
        total += f3 != 0 ? this.fcounterF3(f3) : 0
        total += f4 != 0 ? this.fcounterF4(f4) : 0
        total += f5 != 0 ? this.fcounterF5(f5) : 0
        total += f6 != 0 ? this.fcounterF6(f6) : 0
        total += f7 != 0 ? this.fcounterF7(f7) : 0
        total += f8 != 0 ? this.fcounterF8(f8) : 0
        total += f9 != 0 ? this.fcounterF9(f9) : 0

        return total
    }

    static fcounterF1(number) {
        if(number == 1) {
            return 50
        } else if (number == 2) {
            return 200
        } else if (number == 3) {
            return 350
        } else if (number == 4) {
            return 550
        } else if (number == 5) {
            return 750
        } else if (number == 6) {
            return 950
        } else if (number == 7) {
            return 1250
        } else {
            return "-"
        }
    }
    static fcounterF2(number) {
        if(number == 1) {
            return 25
        } else if (number == 2) {
            return 125
        } else if (number == 3) {
            return 275
        } else if (number == 4) {
            return 450
        } else if (number == 5) {
            return 650
        } else {
            return "-"
        }
    }
    static fcounterF3(number) {
        if(number == 1) {
            return 25
        } else if (number == 2) {
            return 125
        } else if (number == 3) {
            return 275
        } else if (number == 4) {
            return 450
        } else if (number == 5) {
            return 650
        } else {
            return "-"
        }
    }
    static fcounterF4(number) {
        if(number == 1) {
            return 25
        } else if (number == 2) {
            return 75
        } else if (number == 3) {
            return 150
        } else if (number == 4) {
            return 225
        } else if (number == 5) {
            return 325
        } else if (number == 6) {
            return 450
        } else {
            return "-"
        }
    }
    
    static fcounterF5(number) {
        if(number == 1) {
            return 25
        } else if (number == 2) {
            return 75
        } else if (number == 3) {
            return 150
        } else if (number == 4) {
            return 225
        } else if (number == 5) {
            return 325
        } else if (number == 6) {
            return 450
        } else {
            return "-"
        }
    }
    static fcounterF6(number) {
        if(number == 1) {
            return 10
        } else if (number == 2) {
            return 25
        } else if (number == 3) {
            return 60
        } else if (number == 4) {
            return 110
        } else {
            return "-"
        }
    }
    static fcounterF7(number) {
        if(number == 1) {
            return 20
        } else if (number == 2) {
            return 50
        } else if (number == 3) {
            return 120
        } else if (number == 4) {
            return 220
        } else {
            return "-"
        }
    }
    static fcounterF8(number) {
        if(number == 1) {
            return 5
        } else if (number == 2) {
            return 20
        } else if (number == 3) {
            return 50
        } else {
            return "-"
        }
    }
    static fcounterF9(number) {
        if(number == 1) {
            return 5
        } else if (number == 2) {
            return 20
        } else if (number == 3) {
            return 50
        } else {
            return "-"
        }
    }
    static jobValue(f1, f2, f3, f41, f42, f5, f6){
        let total = 0
        total += f1 != 0 ? this.counterF1(f1) : 0
        total += f2 != 0 ? this.counterF2(f2) : 0
        total += f3 != 0 ? this.counterF3(f3) : 0
        total += f41 != 0 ? this.counterF41(f41) : 0
        total += f42 != 0 ? this.counterF42(f42) : 0
        total += f5 != 0 ? this.counterF5(f5) : 0
        total += f6 != 0 ? this.counterF6(f6) : 0

        return total
    }
    static jobClass(number){
        let kelas = 0
        if (number >=190 && number<=240) {
            kelas = 1
            return kelas
        }else if (number>=245 && number <=300) {
            kelas = 2
            return kelas
        }else if (number>=305 && number <= 370) {
            kelas = 3
            return kelas
        }else if (number>=375 && number <= 450) {
            kelas = 4
            return kelas
        }else if (number>=455 && number <= 650) {
            kelas = 5 
            return kelas    
        }else if (number>=655 && number <= 850) {
            kelas = 6
            return kelas
        }else if (number>=855 && number <=1100) {
            kelas = 7
            return kelas
        }else if (number>=1105 && number <= 1350) {
            kelas = 8
            return kelas
        }else if (number>=1355 && number <= 1600) {
            kelas = 9
            return kelas
        }else if (number>=1605 && number <= 1850) {
            kelas = 10
            return kelas
        }else if (number>=1855 && number <= 2100) {
            kelas = 11
            return kelas
        }else if (number>=2105 && number <=2350) {
            kelas =12
            return kelas
        }else if (number>=2355 && number<=2750) {
            kelas = 13
            return kelas
        }else if (number>=2755 && number <=3150) {
            kelas = 14
            return kelas
        }else if (number>=3155 && number <= 3600) {
            kelas = 15
            return kelas
        }else if (number>=3605 && number<=4050) {
            kelas = 16
            return kelas
        }else if (number>= 4055) {
            kelas = 17
            return kelas
        }else {

            return "Tanpa Kelas"
        }

    }

    

}
export default Fes;