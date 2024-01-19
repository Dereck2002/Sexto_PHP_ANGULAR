<?php
require_once('../Config/cls_conexion.model.php');
class Clase_Stock
{
    public function todos()
    {
        try {
            $con = new Clase_Conectar_Base_Datos();
            $con = $con->ProcedimientoConectar();
            $cadena = "SELECT Stocks.*, Productos.Nombre as producto, Proveedores.Nombres as proveedor FROM `Stocks` inner JOIN Proveedores on Stocks.ProveedorId = Proveedores.ProveedorId INNER JOIN Productos on Stocks.ProductoId = Productos.ProductoId";
            $result = mysqli_query($con, $cadena);
            return $result;
        } catch (Throwable $th) {
            return $th->getMessage();
        } finally {
            $con->close();
        }
    }
    public function uno($StockId)
    {
        try {
            $con = new Clase_Conectar_Base_Datos();
            $con = $con->ProcedimientoConectar();
            $cadena = "SELECT * FROM `Stocks` WHERE StockId=$StockId";
            $result = mysqli_query($con, $cadena);
            return $result;
        } catch (Throwable $th) {
            return $th->getMessage();
        } finally {
            $con->close();
        }
    }
    public function insertar($ProductoId, $ProveedorId, $Cantidad, $Precio_Venta)
    {
        try {
            $con = new Clase_Conectar_Base_Datos();
            $con = $con->ProcedimientoConectar();
            $cadena = "INSERT INTO `Stocks`( `ProductoId`, `ProveedorId`, `Cantidad`, `Precio_Venta`) VALUES ('$ProductoId','$ProveedorId',$Cantidad,'$Precio_Venta')";
            $result = mysqli_query($con, $cadena);
            return 'ok';
        } catch (Throwable $th) {
            return $th->getMessage();
        } finally {
            $con->close();
        }
    }
    public function actualizar($StockId, $ProductoId, $ProveedorId, $Cantidad, $Precio_Venta)
    {
        try {
            $con = new Clase_Conectar_Base_Datos();
            $con = $con->ProcedimientoConectar();
            $cadena = "UPDATE `Stocks` SET `ProductoId`='$ProductoId',`ProveedorId`='$ProveedorId',`Cantidad`='$Cantidad',`Precio_Venta`='$Precio_Venta' WHERE `StockId`=$StockId";
            $result = mysqli_query($con, $cadena);
            return "ok";
        } catch (Throwable $th) {
            return $th->getMessage();
        } finally {
            $con->close();
        }
    }
    public function eliminar($StockId)
    {
        try {
            $con = new Clase_Conectar_Base_Datos();
            $con = $con->ProcedimientoConectar();
            $cadena = "delete from Stocks where StockId=$StockId";
            $result = mysqli_query($con, $cadena);
            return "ok";
        } catch (Throwable $th) {
            return $th->getMessage();
        } finally {
            $con->close();
        }
    }
}
