
----Nx theo em hiểu nó như là 1 cái tools để mình xây dựng 1 project có cấu trúc rõ ràng dễ maintain

------------------ Cách Gen ra 1 project ------------------
    -npm init nx-workspace (project-name)
        *"Name framework Use:Agular"

    -Apps: là nơi import các thư viện, có thể cấu hình dependency injection(theo em tìm hiểu thì DI là các component khác sẽ phụ thuộc vào apps , khi apps import 1 thư viện , là các component sử dụng thư viện đó thì là nó đang phụ thuộc vào thằng apps) ngoài ra app còn kết nối các libs với nhau

------------------Cách Gen ra 1 Lib"---------------------

    -ng g lib Client --buildable

    libs là nơi để chứa các services, components,.. Thường thì trong 1 lib sẽ có nhiều folder hơn app. 


------------------Cách gen component trong lib-------------------

    -ng g c componentA --project Client(tên lib)



------------------Cách gen routing trong lib-------------------

    - ng g m Namerouting ---project Web --routing

Trên là những kiến thức cơ bản và em dùng nó để build lại project của em ạ 




    