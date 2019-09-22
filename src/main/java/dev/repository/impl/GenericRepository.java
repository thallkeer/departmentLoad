package dev.repository.impl;

//public class GenericRepository<TEntity> implements IGenericRepository<TEntity> {
//    private final Class<TEntity> entityClass;
//
//    public GenericRepository() {
//        this.entityClass = (Class<TEntity>) GenericTypeResolver.resolveTypeArgument(getClass(), GenericRepository.class);
//    }
//
//    @Autowired
//    private SessionFactory sessionFactory;
//
//    protected final Session getSession() {
//        return this.sessionFactory.getCurrentSession();
//    }
//
//    @Override
//    public TEntity getById(int id){
//        return (TEntity) getSession().get(this.entityClass,id);
//    }
//
//    @Override
//    public void create(TEntity entity) {
//        getSession().persist(entityClass);
//    }
//
//    @Override
//    public void update(TEntity entity){
//        getSession().merge(entity);
//    }
//
//    @Override
//    public void delete(TEntity entity) {
//        getSession().delete(entity);
//    }
//
//    @Override
//    public void delete(int id) {
//        delete(getById(id));
//    }
//
//    @Override
//    public List<TEntity> getAll() {
//        return  getSession().createQuery("from " + entityClass.getName(),entityClass).getResultList();
//    }
//
//    @Override
//    public void clear() {
//        getSession().clear();
//
//    }
//
//    @Override
//    public void flush() {
//        getSession().flush();
//
//    }
//}
