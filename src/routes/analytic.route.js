import AnjabPage from "@/app/pages/anjab/anjab.page.html"
import InputAnjabPage from "@/app/pages/anjab/input.page.html"
import DetailAnjabPage from "@/app/pages/anjab/detail.page.html"

import DetailAbkPage from "@/app/pages/abk/detail.page.html"
import FormAPage from "@/app/pages/abk/form.a.page.html"
import FormBPage from "@/app/pages/abk/form.b.page.html"
import FormCPage from "@/app/pages/abk/form.c.page.html"
import FormDPage from "@/app/pages/abk/form.d.page.html"
import FormEPage from "@/app/pages/abk/form.e.page.html"

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
    }
]