Browser("Amazon.fr : livres, DVD,").Page("Amazon.fr : livres, DVD,").WebElement("Rechercher").Check CheckPoint("Rechercher") @@ hightlight id_;_Browser("Amazon.fr : livres, DVD,").Page("Amazon.fr : livres, DVD,").WebElement("Rechercher")_;_script infofile_;_ZIP::ssf1.xml_;_
Browser("Amazon.fr : livres, DVD,").Page("Amazon.fr : livres, DVD,").WebEdit("field-keywords").Check CheckPoint("field-keywords") @@ hightlight id_;_Browser("Amazon.fr : livres, DVD,").Page("Amazon.fr : livres, DVD,").WebEdit("field-keywords")_;_script infofile_;_ZIP::ssf2.xml_;_
print "Connexion Amazon"
Browser("Amazon.fr : livres, DVD,").Page("Amazon.fr : livres, DVD,").WebEdit("field-keywords").Set "canapé"
Browser("Amazon.fr : livres, DVD,").Page("Amazon.fr : livres, DVD,").WebElement("xpath:=/html/body/div[1]/header/div/div[1]/div[3]/div/form/div[2]/div/input").Click
print "recherche canapé"
Browser("Amazon.fr : livres, DVD,").Close
print "Fermeture des fenêtres"
