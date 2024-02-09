// SCOPE
/*
    * VAR
    - Boleh memiliki nama yang sama
    - Value nya bisa di update
    - Tidak mengenal Scope

    * LET
    - Tidak boleh memiliki nama yang sama
    - Value nya bisa di Update
    - Mengenal Scope

    * CONST
    - Tidak boleh memiliki nama yang sama
    - Value nya tidak bisa diupdate
    - Mengenal Scope
*/

// Contoh VAR
var student = "Prabu"
    {
        var student = "Dito"
    }

    console.log(student)

// Contoh LET
let campus = 'BSD'
{
    let campus = 'JKT'
    {
        let campus = 'SBY'
    }
}

    console.log(campus)