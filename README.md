初始化

```
npm install
```

运行

```
npm run dev
```
使用
```
$("#map").timezonePicker();  //初始化
      //点击回调
			$("#map").on("map:clicked", function() {  
      //取值
				var values=$("#map").data('timezonePicker').getValue();
		...
			});

```

QQ:878182159
