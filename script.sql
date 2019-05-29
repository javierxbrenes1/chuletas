SELECT a.CodigoBaseDatos, 
	       CAST(DECRYPTBYPASSPHRASE(@passphrase,StringConexion) as varchar(max)) StringConexion, 
		   CAST(DECRYPTBYPASSPHRASE(@passphrase, b.PassPhrase) as varchar(max)) PassPhrase
	  FROM CONFP006 a WITH(NOLOCK) inner join CONFP005 b WITH(NOLOCK)
	    ON (a.CodigoBaseDatos = b.CodigoBaseDatos)
	 WHERE CodigoCompania = @codigoCompania
	   AND CodigoSistema = @codigoSistema
