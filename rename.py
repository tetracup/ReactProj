import  json
import os

def rename_directory(old_name, new_name):
    abs_old_path = os.path.abspath(old_name)
    abs_new_path = os.path.join(os.path.dirname(abs_old_path), new_name)
    
    os.rename(abs_old_path, abs_new_path)
    
def ChangeName(oldName, newName):
    
    prefix = './' + oldName + '/'
    
    if(not os.path.exists(prefix)):
        print("Folder not found")
        return
    #change fields in package.json 
    
    
    with open(prefix + 'package.json') as x:
        data = json.load(x)
        
        data["name"] = newName.lower()

    with open(prefix + 'package.json', 'w') as x:
        json.dump(data, x, indent = 2)

    #change fields in package-lock.json 
    with open(prefix + 'package-lock.json') as x:
        data = json.load(x)
        
        data["name"] = newName.lower()
        data["packages"][""]["name"] = newName.lower()


    with open(prefix + 'package-lock.json', 'w') as x:
        json.dump(data, x, indent = 2)
        
    rename_directory('./' + oldName, './' + newName)
    
#Old Name, New Name
ChangeName("BoilerPlateReact", "BoilerPlateReact")



    


