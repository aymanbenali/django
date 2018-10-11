function get_resau_recomande(select_value,qualitysigfox,quality_objenious){
    if(select_value == 1){
        if(qualitysigfox == 'Very Good'){
            reponse_sigfox = 'Vous etes a priori éligible pour recevoir le capteur permettant de suivre votre consommation'

            if(quality_objenious == 3){
                reseau_recomnd = 'Sigfox'
                reponse_objenious = 'Vous etes a priori éligible pour recevoir le capteur permettant de suivre votre consommation' 

            }else if(quality_objenious == 2){
                reseau_recomnd = 'Sigfox'
                reponse_objenious = 'Vous etes a priori éligible pour recevoir le capteur permettant de suivre votre consommation'

            }else if(quality_objenious == 1){
                reseau_recomnd = 'Sigfox'
                reponse_objenious = "vous n'etes pas éligible : le signal réseau est insuffisant à votre domicile"

            }else if(quality_objenious == 0){
                reseau_recomnd = 'Sigfox'
                reponse_objenious = "vous n'etes pas éligible : le signal réseau est insuffisant à votre domicile"
            }
        }else if(qualitysigfox == 'Good'){
            reponse_sigfox = 'Vous etes a priori éligible pour recevoir le capteur permettant de suivre votre consommation'

            if(quality_objenious == 3){
                reseau_recomnd = 'Sigfox'
                reponse_objenious = 'Vous etes a priori éligible pour recevoir le capteur permettant de suivre votre consommation'

            }else if(quality_objenious == 2){
                reseau_recomnd = 'Sigfox'
                reponse_objenious = 'Vous etes a priori éligible pour recevoir le capteur permettant de suivre votre consommation'

            }else if(quality_objenious == 1){
                reseau_recomnd = 'Sigfox'
                reponse_objenious = "vous n'etes pas éligible : le signal réseau est insuffisant à votre domicile"

            }else if(quality_objenious == 0){
                reseau_recomnd = 'Sigfox'
                reponse_objenious = "vous n'etes pas éligible : le signal réseau est insuffisant à votre domicile"

            }
        }if(qualitysigfox == 'Average'){
            reponse_sigfox = 'Vous etes a priori éligible pour recevoir le capteur permettant de suivre votre consommation'

            if(quality_objenious == 3){
                reseau_recomnd = 'Objenious'
                reponse_objenious = 'Vous etes a priori éligible pour recevoir le capteur permettant de suivre votre consommation'

            }else if(quality_objenious == 2){
                reseau_recomnd = 'Sigfox'
                reponse_objenious = 'Vous etes a priori éligible pour recevoir le capteur permettant de suivre votre consommation'

            }else if(quality_objenious == 1){
                reseau_recomnd = 'Sigfox'
                reponse_objenious = "vous n'etes pas éligible : le signal réseau est insuffisant à votre domicile"

            }else if(quality_objenious == 0){
                reseau_recomnd = 'Sigfox'
                reponse_objenious = "vous n'etes pas éligible : le signal réseau est insuffisant à votre domicile"

            }
        }if(qualitysigfox == 'Coverage Limit'){
            reponse_sigfox = "vous n'etes pas éligible : le signal réseau est insuffisant à votre domicile"

            if(quality_objenious == 3){
                reseau_recomnd = 'Objenious'
                reponse_objenious = 'Vous etes a priori éligible pour recevoir le capteur permettant de suivre votre consommation'

            }else if(quality_objenious == 2){
                reseau_recomnd = 'Objenious'
                reponse_objenious = 'Vous etes a priori éligible pour recevoir le capteur permettant de suivre votre consommation'

            }else if(quality_objenious == 1){
                reseau_recomnd = 'Sigfox'
                reponse_objenious = "vous n'etes pas éligible : le signal réseau est insuffisant à votre domicile"

            }else if(quality_objenious == 0){
                reseau_recomnd = 'Sigfox'
                reponse_objenious = "vous n'etes pas éligible : le signal réseau est insuffisant à votre domicile"

            }
        }if(qualitysigfox == 'Not covered'){
            reponse_sigfox = "vous n'etes pas éligible : le signal réseau est insuffisant à votre domicile"

            if(quality_objenious == 3){
                reseau_recomnd = 'Objenious'
                reponse_objenious = 'Vous etes a priori éligible pour recevoir le capteur permettant de suivre votre consommation'

            }else if(quality_objenious == 2){
                reseau_recomnd = 'Objenious'
                reponse_objenious = 'Vous etes a priori éligible pour recevoir le capteur permettant de suivre votre consommation'

            }else if(quality_objenious == 1){
                reseau_recomnd = 'Aucun'
                reponse_objenious = "vous n'etes pas éligible : le signal réseau est insuffisant à votre domicile"

            }else if(quality_objenious == 0){
                reseau_recomnd = 'Aucun'
                reponse_objenious = "vous n'etes pas éligible : le signal réseau est insuffisant à votre domicile"

            }
        }
    }else if (select_value == 2){
        if(qualitysigfox == 'Very Good'){
            reponse_sigfox = 'Vous etes a priori éligible pour recevoir le capteur permettant de suivre votre consommation'

            if(quality_objenious == 3){
                reseau_recomnd = 'Sigfox'
                reponse_objenious = 'Vous etes a priori éligible pour recevoir le capteur permettant de suivre votre consommation'

            }else if(quality_objenious == 2){
                reseau_recomnd = 'Sigfox'
                reponse_objenious = 'Vous etes a priori éligible pour recevoir le capteur permettant de suivre votre consommation'

            }else if(quality_objenious == 1){
                reseau_recomnd = 'Sigfox'
                reponse_objenious = "vous n'etes pas éligible : le signal réseau est insuffisant à votre domicile"

            }else if(quality_objenious == 0){
                reseau_recomnd = 'Sigfox'
                reponse_objenious = "vous n'etes pas éligible : le signal réseau est insuffisant à votre domicile"

            }
        }else if(qualitysigfox == 'Good'){
            reponse_sigfox = 'Vous etes a priori éligible pour recevoir le capteur permettant de suivre votre consommation'

            if(quality_objenious == 3){
                reseau_recomnd = 'Sigfox'
                reponse_objenious = 'Vous etes a priori éligible pour recevoir le capteur permettant de suivre votre consommation'

            }else if(quality_objenious == 2){
                reseau_recomnd = 'Sigfox'
                reponse_objenious = 'Vous etes a priori éligible pour recevoir le capteur permettant de suivre votre consommation'

            }else if(quality_objenious == 1){
                reseau_recomnd = 'Sigfox'
                reponse_objenious = "vous n'etes pas éligible : le signal réseau est insuffisant à votre domicile"

            }else if(quality_objenious == 0){
                reseau_recomnd = 'Sigfox'
                reponse_objenious = "vous n'etes pas éligible : le signal réseau est insuffisant à votre domicile"

            }
        }if(qualitysigfox == 'Average'){
            reponse_sigfox = 'Vous etes a priori éligible pour recevoir le capteur permettant de suivre votre consommation'

            if(quality_objenious == 3){
                reseau_recomnd = 'Objenious'
                reponse_objenious = 'Vous etes a priori éligible pour recevoir le capteur permettant de suivre votre consommation'

            }else if(quality_objenious == 2){
                reseau_recomnd = 'Sigfox'
                reponse_objenious = 'Vous etes a priori éligible pour recevoir le capteur permettant de suivre votre consommation'

            }else if(quality_objenious == 1){
                reseau_recomnd = 'Sigfox'
                reponse_objenious = "vous n'etes pas éligible : le signal réseau est insuffisant à votre domicile"

            }else if(quality_objenious == 0){
                reseau_recomnd = 'Sigfox'
                reponse_objenious = "vous n'etes pas éligible : le signal réseau est insuffisant à votre domicile"

            }
        }if(qualitysigfox == 'Coverage Limit'){
            reponse_sigfox = "vous n'etes pas éligible : le signal réseau est insuffisant à votre domicile"

            if(quality_objenious == 3){
                reseau_recomnd = 'Objenious'
                reponse_objenious = 'Vous etes a priori éligible pour recevoir le capteur permettant de suivre votre consommation'

            }else if(quality_objenious == 2){
                reseau_recomnd = 'Objenious'
                reponse_objenious = 'Vous etes a priori éligible pour recevoir le capteur permettant de suivre votre consommation'

            }else if(quality_objenious == 1){
                reseau_recomnd = 'Sigfox'
                reponse_objenious = "vous n'etes pas éligible : le signal réseau est insuffisant à votre domicile"

            }else if(quality_objenious == 0){
                reseau_recomnd = 'Sigfox'
                reponse_objenious = "vous n'etes pas éligible : le signal réseau est insuffisant à votre domicile"
            }
        }if(qualitysigfox == 'Not covered'){
            reponse_sigfox = "vous n'etes pas éligible : le signal réseau est insuffisant à votre domicile"

            if(quality_objenious == 3){
                reseau_recomnd = 'Objenious'
                reponse_objenious = 'Vous etes a priori éligible pour recevoir le capteur permettant de suivre votre consommation'

            }else if(quality_objenious == 2){
                reseau_recomnd = 'Objenious'
                reponse_objenious = 'Vous etes a priori éligible pour recevoir le capteur permettant de suivre votre consommation'

            }else if(quality_objenious == 1){
                reseau_recomnd = 'Aucun'
                reponse_objenious = "vous n'etes pas éligible : le signal réseau est insuffisant à votre domicile"

            }else if(quality_objenious == 0){
                reseau_recomnd = 'Aucun'
                reponse_objenious = "vous n'etes pas éligible : le signal réseau est insuffisant à votre domicile"

            }
        }
    }
    
    return {reseau_recomnd,reponse_sigfox,reponse_objenious,quality_objenious,qualitysigfox}
}
