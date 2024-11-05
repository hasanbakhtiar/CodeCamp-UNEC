// var abstract = 5;

// console.log(abstract);

// 1.Dəyişkən adları mənalı və anlaşıqlı olmalıdır.
// 2.Dəyişkən adlarını yazarkən İngilis əlifbasından başqa əlifadan istifadə etmək qadağandır.
// 3.Dəyişkən adları _ (alt xətt) ilə başlaya bilər.
// 4.Dəyişkən adları $(dollar) işarəsi ilə başlaya bilər.
// 5.Dəyişkən adları heç bir zaman rəqəm ilə başlaya bilməz.Amma ilk hərfdə sonra istifadə edə bilərik.
// 6.Dəyişkən adları böyük kiçik hərfləri anlayır.
// 7.Eyni dəyişkənə iki fərqli məlumat tanımlanan zaman sonuncu tanımlanan məlumatı göstərir.
// 8.JavaScript tərəfindən hazırlanmış rezerv kəlimələri dəyişkən adlarına vermək qadağandır.

// abstract 	    arguments	    await*	            boolean
// break	        byte	        case	            catch
// char	            class*	        const	            continue
// debugger	        default	        delete	            do
// double	        else	        enum*	            eval
// export*	        extends*	    false	            final
// finally	        float	        for	                function
// goto	            if	            implements	        import*
// in	            instanceof	    int	                interface
// let*	            long	        native	            new
// null	            package	        private	            protected
// public	        return	        short	            static
// super*	        switch	        synchronized	    this
// throw	        throws	        transient	        true
// try	            typeof	        var	                void
// volatile	        while	        with	            yield

// var      -> variable (global)
// const    -> constant (local)
// let      -> let      (local)

// const a = 5;
// console.log(a);

// global

// if (true) {
//     // local global

//     if (true) {
//         let a=5;
//         // local global

//         if (true) {
//             // local
//             console.log(a);
//         }

//     }

// }

// "use strict"

// a = 5;

// eger
// deyilse
// deyilse eger

// if (5>10) {
//     console.log("result one");

// }else if(3>1){
//     console.log("result two");

// }else{
//     console.log("axirinci variant");

// }


let a = 5;
switch (a) {
    case 5:
        console.log(5);
        break;
    case 10:
        console.log(10);
        break;
    default:
        console.log('default');
break;

}


5<10?console.log(true): 10<20?console.log('hello'):console.log(false);




