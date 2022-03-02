// nestesed props
export type Name =  string

// Optional props
export type NavbarPropsType  = {
    fName : Name,
    lName : Name,
    isLoggedIn : boolean,
    token? : string,
}
 
// Array types props
export type HomeScreenProps = {
    mentors : {
        name : Name,
        specialization : string,
        skills : Array<string>
    }[]
}

// Object types props
export type ProfilePropsType = {
    person : {
         name : Name,
         age : number,
         homeTown : string,
         state: string
   }
}
