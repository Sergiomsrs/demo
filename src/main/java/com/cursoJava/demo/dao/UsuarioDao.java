package com.cursoJava.demo.dao;

import com.cursoJava.demo.models.Usuario;

import java.util.List;

public interface UsuarioDao {

    List<Usuario> getUsuarios();

    void eliminar(Long id);

    void registrar(Usuario usuario);

    Usuario verificarCredenciales(Usuario usuario);
}
