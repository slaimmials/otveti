describe("Функция обновления числа", function() 
    {
        //Проверка состояния теста
        it("Ввод ложных данных. Проверка 1", function() 
        {
            assert.equal(UpdateOperand("Проверка числа"), 10);
        });
                
        it("Ввод ложных данных. Проверка 2", function() 
        {
            assert.equal(UpdateOperand("100500"), 0);
        });
                
        it("Ввод допустимых значений. Проверка 1", function() 
        {
            assert.equal(UpdateOperand(10), "10");
        });
                
        it("Ввод допустимых значений. Проверка 2", function() 
        {
            assert.equal(UpdateOperand(10), 10);
        });
                
        it("Ввод допустимых значений. Проверка 3", function() 
        {
            assert.equal(UpdateOperand(-1), "-1");
        });
                
        it("Ввод недопустимых значений. Проверка 1", function() 
        {
            assert.equal(UpdateOperand("Десять"), "Десять");
        });
                
        it("Ввод недопустимых значений. Проверка 2", function() 
        {
            assert.equal(UpdateOperand("Минус один"), "Минус один");
        });
                
        it("Ввод недопустимых значений. Проверка 3", function() 
        {
            assert.equal(UpdateOperand("Eleven"), "Eleven");
        });        
    });


    describe("Функция установки оператора", function() 
    {
        //Проверка состояния теста
        it("Ввод ложных данных. Проверка 1", function() 
        {
            assert.equal(SetOperator("Минус"), "-");
        });
                
        it("Ввод допустимых значений. Проверка 2", function() 
        {
            operator = "";
            assert.equal(SetOperator("+"), "+");
        });
                
        it("Ввод допустимых значений. Проверка 3", function() 
        {
            operator = "";
            assert.equal(SetOperator("-"), "-");
        });
                
        it("Ввод допустимых значений. Проверка 4", function() 
        {
            operator = "";
            assert.equal(SetOperator("*"), "*");
        });
                
        it("Ввод допустимых значений. Проверка 5", function() 
        {
            operator = "";
            assert.equal(SetOperator("/"), "/");
        });
                
        it("Ввод недопустимых значений. Проверка 6", function() 
        {
            operator = "";
            assert.equal(SetOperator("Плюс"), "+");
        });
                
        it("Ввод недопустимых значений. Проверка 7", function() 
        {
            operator = "";
            assert.equal(SetOperator("Плюс"), "Плюс");
        });      
        
        it("Ввод недопустимых значений. Проверка 8", function() 
        {
            operator = "";
            assert.equal(SetOperator("+"), "Плюс");
        }); 
    });


    describe("Функция сброса значений", function() 
    {
        //Проверка состояния теста
        it("Ввод ложных данных. Проверка 1", function() 
        {
            assert.equal(Reset("Минус"), "a","b","c","d");
        });

        it("Ввод верных данных. Проверка 1", function() 
        {
            assert.equal(Reset(true), "0","","",false);
        });

        it("Ввод верных данных. Проверка 1", function() 
        {
            assert.equal(Reset(false), "0","","",false);
        });

        it("Ввод неверных данных. Проверка 1", function() 
        {
            assert.equal(Reset("Правда"), "0","","",false);
        });

        it("Ввод неверных данных. Проверка 1", function() 
        {
            assert.equal(Reset("Ложь"), "0","","",false);
        });

        
    });


    describe("Функция получения результата", function() 
    { 
        //Проверка состояния теста
        it("Ввод ложных данных. Проверка 1", function() 
        {
            assert.equal(Result(0), 10);
        });

        it("Ввод ложных данных. Проверка 2", function() 
        {
            assert.equal(Result(60), 10);
        });

        it("Ввод верных данных. Проверка 1", function() 
        {
            assert.equal(Result(5,2,"+"), 7);
        });

        it("Ввод верных данных. Проверка 2", function() 
        {
            assert.equal(Result(5,2,"-"), 3);
        });

        it("Ввод верных данных. Проверка 3", function() 
        {
            assert.equal(Result(5,2,"*"), 10);
        });

        it("Ввод верных данных. Проверка 4", function() 
        {
            assert.equal(Result(5,2,"/"), 2.5);
        });

        it("Ввод неверных данных. Проверка 1", function() 
        {
            assert.equal(Result("Пять","Два","Плюс"), 7);
        });

        it("Ввод неверных данных. Проверка 2", function() 
        {
            assert.equal(Result("Five","Two","Plus"), 7);
        });

        
    });
