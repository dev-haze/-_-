function get_screenSize(){
    ls = [screen.width, screen.height];
    return ls;
}   

function set_formStyle(){
    size = get_screenSize();
    if( size[0] > size[1]){
        return 'pc';
    }
    else return 'mobile';
}