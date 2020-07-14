import AnjabPage from "@/app/pages/anjab/anjab.page.html"
import InputAnjabPage from "@/app/pages/anjab/input.page.html"
import DetailAnjabPage from "@/app/pages/anjab/detail.page.html"
import ModifyAnjabPage from "@/app/pages/anjab/modify.page.html"

import DetailAbkPage from "@/app/pages/abk/detail.page.html"
import InputAbkPage from "@/app/pages/abk/input.page.html"
import ModifyAbkPage from "@/app/pages/abk/modify.page.html"

import FormAPage from "@/app/pages/abk/form.a.page.html"
import FormBPage from "@/app/pages/abk/form.b.page.html"
import FormCPage from "@/app/pages/abk/form.c.page.html"
import FormDPage from "@/app/pages/abk/form.d.page.html"
import FormEPage from "@/app/pages/abk/form.e.page.html"

import PetaJabatan from "@/app/pages/peta/peta.jabatan.html"

export default [
    {
        path: 'anjab',
        name: 'anjab.page',
        component: AnjabPage
    },
    {
        path: 'anjab/input',
        name: 'input.anjab.page',
        component: InputAnjabPage
    },
    {
        path: 'anjab/modify/:position_id',
        name: 'modify.anjab.page',
        component: ModifyAnjabPage,
        props: true
    },
    {
        path: 'anjab/detail/:position_id',
        name: 'detail.anjab.page',
        component: DetailAnjabPage,
        props: true
    },
    {
        path: 'abk/detail/:position_id',
        name: 'detail.abk.page',
        component: DetailAbkPage,
        props: true
    },
    {
        path: 'abk/input/:position_id',
        name: 'input.abk.page',
        component: InputAbkPage,
        props: true
    },
    {
        path: 'abk/modify/:position_id',
        name: 'modify.abk.page',
        component: ModifyAbkPage,
        props: true
    },
    {
        path: 'form-a',
        name: 'form.a.page',
        component: FormAPage
    },
    {
        path: 'form-b',
        name: 'form.b.page',
        component: FormBPage
    },
    {
        path: 'form-c',
        name: 'form.c.page',
        component: FormCPage
    },
    {
        path: 'form-d',
        name: 'form.d.page',
        component: FormDPage
    },
    {
        path: 'form-e',
        name: 'form.e.page',
        component: FormEPage
    },
    {
        path: 'peta-jabatan',
        name: 'peta.jabatan.page',
        component: PetaJabatan
    }
]